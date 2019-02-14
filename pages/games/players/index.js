import React, { Component } from 'react';
import { Button, Table, Dropdown, Menu, Form, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import Game from '../../../ethereum/gameInstance';
import PlayerRow from '../../../components/PlayerRow';
import PenaltyForm from '../../../components/PenaltyForm';
import web3 from '../../../ethereum/web3';

class PlayerIndex extends Component {
  state={
    playerSelected: '',
    errorMessage: '',
    loading: false,
    hasVoted: false
  }
  static async getInitialProps(props) {
    const { address } = props.query;
    const accounts = await web3.eth.getAccounts();
    const game = Game(address);
    const summary = await game.methods.getGameInstanceSummary().call();
    const noOfPlayers = await game.methods.getPlayersCount().call();
    const playerAddresses = await game.methods.getPlayers().call();
    const players = await Promise.all(
      Array(parseInt(noOfPlayers))
      .fill()
      .map((element, index) => {
        return game.methods.getPlayerSummary(playerAddresses[index]).call();
      })
    );
    var hasPenaltyPlayer = null;
    var hasImposedPenaltyPlayer = false;
    for(var i = 0; i < parseInt(noOfPlayers); i++) {
        if(players[i]['1'] >= (parseInt(noOfPlayers) * 3/4)){
          hasPenaltyPlayer = playerAddresses[i];
          if(players[i]['2']) {
            hasImposedPenaltyPlayer = true;
          }
        }
    }
    var hasVoted = false;
    var inGame = false;
    for(var j = 0; j < playerAddresses.length; j++) {
      if(playerAddresses[j]==accounts[0]) {
        inGame = true;
        var temp = await game.methods.getPlayerSummary(playerAddresses[j]).call();
        hasVoted = temp['0'];
        break;
      }
    }
    return {
      address,
      players,
      noOfPlayers,
      playerAddresses,
      currentAccount: accounts[0],
      hasPenaltyPlayer,
      isGameMaster: (summary[0] == accounts[0])? true : false,
      hasVoted,
      inGame,
      hasImposedPenaltyPlayer
     };
  }

  renderRows() {
    return this.props.players.map((player, index) => {
      return (
        <PlayerRow
          key={index}
          id={index}
          player={player}
          address={this.props.playerAddresses[index]}
        />
      );
    });
  }

  renderVoting() {
    return this.props.playerAddresses.map((address, index) => {
      if(address != this.props.currentAccount) {
        return (
          <Dropdown.Item key={index} onClick={event => this.setState({ playerSelected: address})}>
          {address}
          </Dropdown.Item>
        );
      }
    });
  }

  onSubmit = async event => {
  event.preventDefault
  const game = Game(this.props.address);
  this.setState({ loading: true, errorMessage: '' });
  try {
    const accounts = await web3.eth.getAccounts();
    await game.methods
    .reportPlayer(this.state.playerSelected)
    .send({
      from: accounts[0],
  });
    this.setState({hasVoted: true});
    Router.replaceRoute(`/games/${this.props.address}/players`);
  } catch (err) {
    this.setState({ errorMessage: err.message });
  }

  this.setState({ loading: false, value: '' });
};

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>Players</h3>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Address</HeaderCell>
              <HeaderCell>Voted</HeaderCell>
              <HeaderCell>Vote Count</HeaderCell>
              <HeaderCell>Penalty Imposed</HeaderCell>
              <HeaderCell>Penalty Paid</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        <div>Found {this.props.noOfPlayers} players.</div>

        {!this.props.hasVoted&&this.props.inGame&&!this.state.hasVoted? (
          <div>
          <p></p>
          <h3>Voting</h3>
          <p>Player Selected: {this.state.playerSelected}</p>
          <Menu vertical>
            <Dropdown item text='Select Player'>
              <Dropdown.Menu>
                {this.renderVoting()}
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
          {this.state.playerSelected==''? null : (<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Button primary loading={this.state.loading}>
            Vote
          </Button>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>)}
        </div>
        ) : null}

        {(this.props.hasPenaltyPlayer!=null&&this.props.isGameMaster&&!this.props.hasImposedPenaltyPlayer)? (
          <div>
          <PenaltyForm playerAddress={this.props.hasPenaltyPlayer} gameAddress = {this.props.address}/>
          </div>
        ) : null}
      </Layout>
    );
  }
}

export default PlayerIndex;
