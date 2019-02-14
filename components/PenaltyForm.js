import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Game from '../ethereum/gameInstance';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class PenaltyForm extends Component {
  state={
    value: '',
    errorMessage: '',
    loading: false,
    penaltyImposed: false
  }

  onSubmit = async event => {
    event.preventDefault();
    const game = Game(this.props.gameAddress);
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await game.methods
      .imposePenalty(this.props.playerAddress, this.state.value)
      .send({
        from: accounts[0]
    });
    this.setState({penaltyImposed: true});
      Router.replaceRoute(`/games/${this.props.gameAddress}/players`); //This is to refresh the page without the user pressing back button and going back to the same page. Use back ticks
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: '' });
  }

  render() {
    return(
      <div>
      {!this.state.penaltyImposed? (
        <div>
        <p></p>
        <h3>Impose penalty on player with address {this.props.playerAddress}?</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Amount to Impose</label>
            <Input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
              label="Wei"
              labelPosition="right"
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Impose Penalty
          </Button>
        </Form>
        </div>
      ) : null}
      </div>
    );
  }
}

export default PenaltyForm;
