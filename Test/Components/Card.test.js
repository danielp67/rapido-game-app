import React from 'react';
import {create, act} from 'react-test-renderer';
import Card from '../../Components/Card';

test('card', () => {
    const deck = [{card: 't', suit: 't'}];
    const mockFn = jest.fn()
    const tree = create(
        <Card
            card={deck}
            realPlayer={true}
            slotName={"test"}
            setCurrentCard={mockFn}
            setCardOnDbClick={mockFn}
            drop={mockFn}
        />
    );
    expect(tree.toJSON()).toMatchSnapshot();

    const card = tree.root.findByProps({testID : 'card'}).props
    act(() => card.onTouchEndCapture())
})

/*
test('card touch', () => {
    const tree = create(<Card />);
    const card = tree.root.findByProps({testID : 'card'}).props
    act(() => card.onTouchEndCapture())
    console.log(card)
});*/
