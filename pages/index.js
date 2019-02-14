import React, { Component } from 'react';
import { Card, Button, Form, Input, Message, Grid } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class gameInstanceIndex extends Component {
	state = {
    errorMessage: '',
    loading: false
  };
	static async getInitialProps() {
		const games = await factory.methods.getDeployedGameInstances().call();
		return { games };
	}
	renderGames() {
		const items = this.props.games.map(address => {
			return {
        header: address,
        description: (
          <Link route={`/games/${address}`}>
            <a>View Game</a>
          </Link>
        ),
        fluid: true
      };
		});
		return <Card.Group items={items} />;
	}

	onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createGameInstance()
        .send({
          from: accounts[0]
        });
      Router.replaceRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

	render() {
		return (
			<Layout>
				<Grid>
					<Grid.Row>
						<h3>Games</h3>
					</Grid.Row>
					<Grid.Row>{this.renderGames()}</Grid.Row>
					<Grid.Row>
					<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
						<Button loading={this.state.loading} primary>
							Create New Game
						</Button>
						<Message error header="Oops!" content={this.state.errorMessage} />
					</Form>
					</Grid.Row>
				</Grid>
      </Layout>
		);
	}
}

export default gameInstanceIndex;
