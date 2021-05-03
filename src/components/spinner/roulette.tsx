import React from 'react';
import { Wheel } from 'react-custom-roulette'

const data = [
    {option: '0', style: {backgroundColor: 'green', textColor: 'black'}},
    {option: '1', style: {backgroundColor: 'white', textColor: 'black'}},
    {option: '2', style: { textColor: 'black'}}
];

export function Spinner() {
    return (
        <div>
            <Wheel
            mustStartSpinning={true}
            prizeNumber={3}
            data={data}
            backgroundColors={['$3e3e3e', '#df3428']}
            textColors={['#FFFFFF']}
            />
        </div>
    )
}
