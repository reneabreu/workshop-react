import React from 'react';
import style from './Welcome.module.css';

const Welcome = (props) => {

    const {title, subtitle} = props;

    return(
        <section className={`hero is-info welcome is-small ${style.cuadroBienvenida} ` }>
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                { title }
                            </h1>
                            <h2 className="subtitle">
                                { subtitle }
                            </h2>
                        </div>
                    </div>
              </section>
    )
}

export default Welcome;