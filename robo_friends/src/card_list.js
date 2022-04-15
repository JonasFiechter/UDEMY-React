import React from "react";
import Card from './card.js';

const CardList = ({robots}) => {
    const card_component = robots.map((user, i) => {
        return <Card 
                    key={robots[i].id} 
                    hash='adwad' 
                    id={robots[i].id} 
                    name={robots[i].name}
                />
    })
    return (
        <div>
            {card_component}
        </div>
    );
};

export default CardList