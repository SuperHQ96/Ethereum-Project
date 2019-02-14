import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Game from '../ethereum/gameInstance';

class PlayerRow extends Component {
  render() {
    const { Row, Cell } = Table;
    const { id, player, noOfPlayers, address } = this.props;
    const voted = player['0']? "Yes" : "No";
    const penaltyImpose = player['2']? "Yes": "No";
    const penaltyPaid = player['3']? "Yes" : "No";

    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{address}</Cell>
        <Cell>{voted}</Cell>
        <Cell>{player['1']}</Cell>
        <Cell>{penaltyImpose}</Cell>
        <Cell>{penaltyPaid}</Cell>
      </Row>
    );
  }
}

export default PlayerRow;
