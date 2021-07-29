import React, { Component } from 'react';
import Player from './Player';


class ListPlayers extends Component {

  render() {
    return (

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sport</th>
            <th>Nick Name</th>
            <th>Number</th>
            <th>Team</th>
            <th>Position</th>
            <th>Goals Made</th>
            <th>Goals Received</th>
            <th>Total Poins</th>
          </tr>
        </thead>
        <tbody>
          {this.props.players.map((player, index) => (
            <tr key={index}>
              <Player
                player={player}
              />
            </tr>
          ))}
        </tbody>
      </table>


    );
  }

}

export default ListPlayers;
