import React, { Component } from 'react';
import { Card, Grid, Button, Form, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Game from '../../ethereum/gameInstance';
import web3 from '../../ethereum/web3';
import { Link, Router } from '../../routes';

class GameShow extends Component {
  state = {
    errorMessage: '',
    loading: false,
    penaltyPaid: false
  }

  static async getInitialProps(props) {
    const game = Game(props.query.address);
    const summary = await game.methods.getGameInstanceSummary().call();
    const accounts = await web3.eth.getAccounts();
    console.log("Hi");
    const accountSummary = await game.methods.getCurrentAccountSummary(accounts[0]).call();
    return {
      isGameMaster: (summary[0] == accounts[0])? true : false,
      enoughPlayers: (summary[2] >= 4),
      joinedGame: accountSummary[0],
      hasPenalty: accountSummary[1],
      address: props.query.address,
      gameMaster: summary[0],
      playersCount: summary[1],
      pendingPlayersCount: summary[2],
      gameStarted: summary[3],
      imposedPenaltyValue: summary[4],
      penaltyPaid: accountSummary[3]
    };
  }
renderCards() {
  const {
    isGameMaster,
    enoughPlayers,
    joinedGame,
    address,
    gameMaster,
    playersCount,
    pendingPlayersCount,
    gameStarted,
    imposedPenaltyValue
  } = this.props;

  const gameStatus = gameStarted? "Voting started" : "Voting not yet started";
  const items = [
    {
      header: gameMaster,
      meta: 'Address of Game Master',
      description: 'The Game Master started this game instance and manages the voting',
      style: { overflowWrap: 'break-word' }
    },
    {
      header: pendingPlayersCount,
      meta: 'Number of pending players',
      description: 'Number of players who have joined the game but may or may not be part of the voting'
    },
    {
      header: playersCount,
      meta: 'Number of players',
      description: 'Number of players part of the voting'
    },
    {
      header: gameStatus,
      meta: 'Game Status',
      description: 'Once voting starts, players part of the voting will be fixed'
    },
    {
      header: imposedPenaltyValue,
      meta: 'Amount of penalty',
      description: 'Amount is in wei'
    }
  ];
  return <Card.Group items={items} />;
}

joinGame = async event => {
  event.preventDefault();

  const {
    isGameMaster,
    enoughPlayers,
    joinedGame,
    address,
    gameMaster,
    playersCount,
    pendingPlayersCount,
    gameStarted,
    imposedPenaltyValue
  } = this.props;

  this.setState({ loading: true, errorMessage: '' });
  const game = Game(address);

  try {
    const accounts = await web3.eth.getAccounts();
    await game.methods
      .joinGame()
      .send({
        from: accounts[0]
      });
    Router.replaceRoute(`/games/${address}`);
  } catch (err) {
    this.setState({ errorMessage: err.message });
  }

  this.setState({ loading: false });
};

startVote = async event => {
  event.preventDefault();

  const {
    isGameMaster,
    enoughPlayers,
    joinedGame,
    address,
    gameMaster,
    playersCount,
    pendingPlayersCount,
    gameStarted,
    imposedPenaltyValue
  } = this.props;

  this.setState({ loading: true, errorMessage: '' });
  const game = Game(address);
  try {
    const accounts = await web3.eth.getAccounts();
    await game.methods
      .initialiseStatus()
      .send({
        from: accounts[0]
      });
    Router.replaceRoute(`/games/${address}`);
  } catch (err) {
    this.setState({ errorMessage: err.message });
  }

  this.setState({ loading: false });
};

payPenalty = async event => {
  event.preventDefault();

  const {
    isGameMaster,
    enoughPlayers,
    joinedGame,
    address,
    gameMaster,
    playersCount,
    pendingPlayersCount,
    gameStarted,
    imposedPenaltyValue
  } = this.props;

  this.setState({ loading: true, errorMessage: '' });
  const game = Game(address);
  try {
    const accounts = await web3.eth.getAccounts();
    await game.methods
      .payPenalty()
      .send({
        from: accounts[0],
        value: imposedPenaltyValue
      });
      this.setState({penaltyPaid: true});
    Router.replaceRoute(`/games/${address}`);
  } catch (err) {
    this.setState({ errorMessage: err.message });
  }

  this.setState({ loading: false });
};

resetGame = async event => {
  event.preventDefault();

  const {
    isGameMaster,
    enoughPlayers,
    joinedGame,
    address,
    gameMaster,
    playersCount,
    pendingPlayersCount,
    gameStarted,
    imposedPenaltyValue
  } = this.props;

  this.setState({ loading: true, errorMessage: '' });
  const game = Game(address);
  try {
    const accounts = await web3.eth.getAccounts();
    await game.methods
      .resetStatus()
      .send({
        from: accounts[0],
        value: imposedPenaltyValue
      });
    Router.replaceRoute(`/games/${address}`);
  } catch (err) {
    this.setState({ errorMessage: err.message });
  }

  this.setState({ loading: false });
};

  render() {
    const {
      isGameMaster,
      enoughPlayers,
      joinedGame,
      address,
      gameMaster,
      playersCount,
      pendingPlayersCount,
      gameStarted,
      imposedPenaltyValue,
      hasPenalty
    } = this.props;

    return (
      <Layout>
        <h3>Game @ address {address}</h3>
        <Grid>
          <Grid.Row>
            {this.renderCards()}
          </Grid.Row>
          <Grid.Row>
          {(joinedGame||gameStarted||isGameMaster)? null : (<Form onSubmit={this.joinGame} error={!!this.state.errorMessage}>
            <Button loading={this.state.loading} primary>
              Join Game
            </Button>
          </Form>)}
          {(isGameMaster&&!gameStarted&&enoughPlayers)? (<Form onSubmit={this.startVote} error={!!this.state.errorMessage}>
            <Button loading={this.state.loading} primary>
              Start Vote
            </Button>
          </Form>) : null}
          {isGameMaster? (<Form onSubmit={this.resetGame} error={!!this.state.errorMessage}>
            <Button loading={this.state.loading} primary>
              Reset Game
            </Button>
          </Form>) : null}
          {hasPenalty&&!this.props.penaltyPaid&&!this.state.penaltyPaid? (<Form onSubmit={this.payPenalty} error={!!this.state.errorMessage}>
            <Button loading={this.state.loading} primary>
              Pay Penalty ({imposedPenaltyValue} Wei)
            </Button>
          </Form>) : null}
          </Grid.Row>
          <Grid.Row>
            <Form error={!!this.state.errorMessage}>
              <Message error header="Oops!" content={this.state.errorMessage} />
            </Form>
          </Grid.Row>
          <Grid.Row>
              {this.state.loading? null : (
                <Link route={`/games/${this.props.address}/players`}>
                  <a>
                    <Button primary>View Players</Button>
                  </a>
                </Link>
              )}
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default GameShow;
