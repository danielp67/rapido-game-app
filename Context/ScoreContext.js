import React from 'react';

export const Score = {
    score:[
    {playerIndex: 1, currentScore:0, total:0},
    {playerIndex: 2, currentScore:0, total:0},
    {playerIndex: 3, currentScore:0, total:0},
    {playerIndex: 4, currentScore:0, total:0},
],
    partNb: 0
}

export const ScoreContext = React.createContext({
    score: Score.score,
    partNb: Score.partNb,
    setScore: () => {
    },
});

