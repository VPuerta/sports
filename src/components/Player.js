import React from 'react'

const Player = (props) =>{

    return(
        <React.Fragment>
            <th>{props.player.sport}</th>
              <th>{props.player.nick}</th>
              <th>{props.player.number}</th>
              <th>{props.player.team}</th>
              <th>{props.player.position}</th>
              <th>{props.player.goalsMade}</th>
              <th>{props.player.goalsReceived}</th>
              <th>{props.player.totalPoints}</th>
              
        </React.Fragment>
    )
}

export default Player;
