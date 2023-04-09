import React from 'react';
import {create, act} from 'react-test-renderer';
import Bots from '../../Components/Bots';


test('card', () => {
    const deck = [{card: 't', suit: 't'}];
    const mockFn = jest.fn()
    const tree = create(<Bots
    start={true}
    stop={false}
    pause={false}
    droppedCard={{card: 't', suit: 't'}}
    setDroppedCard={mockFn}
    gameStop={false}
    setScore={mockFn}
    level={1000}
    loading={false}
    settings={deck}
    gamePause={false}
/>)
    expect(tree.toJSON()).toMatchSnapshot();
})