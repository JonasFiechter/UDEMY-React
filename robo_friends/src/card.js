import React from "react";
import 'tachyons'

const Card = (props) => {
    return (
        <div className="tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${props.id + props.hash}`}/>
            <div>
                <h2>ID - {props.id}</h2>
                <h2>{props.name}</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;