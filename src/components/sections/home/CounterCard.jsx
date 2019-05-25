import React from 'react';

const CounterCard = (props) => {

    const {title, subtitle} = props;

    return(
        <div className="tile is-parent">
        <article className="tile is-child box">
            <p className="title">{title}</p> 
            <p className="subtitle">{subtitle}</p>
        </article>
    </div>
    )
}

export default CounterCard