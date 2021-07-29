import React, { Component } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { fireEvent, prettyDOM } from '@testing-library/dom';
import ListPlayers from './ListPlayers';


const players = [
    {
      nick: 'vane',
      number: '3',
      team: 'team b',
      position: 'G',
      sport: 'Handball',
      goalsMade: '3',
      goalsReceived: '2',
      totalPoints: 21
    }
]

const mockHandler = jest.fn();
test('reders content', () => {
    const component = render(<ListPlayers players={players}/>);

    expect(component.container).toHaveTextContent(players[0].nick);
    expect(component.container).toHaveTextContent(players[0].sport);
})
