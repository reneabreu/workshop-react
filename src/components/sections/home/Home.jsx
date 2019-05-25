import React, { Component, Fragment } from 'react';

import style from './Home.module.css'

import Welcome from './Welcome';
import CounterCard from './CounterCard';
import Table from './Table'
import Breadcrumb from '../../common/menu/Breadcrumb';

const dataBreadcrumb = [
    { 'name': 'Inicio', 'url': '/', 'isSelected':false, },
  ];

class Home extends Component {
    render () {
        return(
            // <Fragment>
            <div className={style.container}>
                
                <div className="columns">
                    <div className="column is-12">
                    
                    {/* BREADCRUM */}
                    <Breadcrumb/>
                    
                    {/* BIENVENIDA */}
                    <Welcome title='Bienvenido, Juan Carlos Bodoque.' subtitle='Que tenga un gran día!'/>
        
                    {/* RESUMEN */}
                    <section className="info-tiles">
                        <div className="tile is-ancestor has-text-centered">
                            <CounterCard title='439k' subtitle='Ordenes'/>
                            <CounterCard title='59k' subtitle='Servicios'/>
                        </div>
                    </section>
        
        
                    
                    </div>
                    </div>
                    
                    {/* TABLE */}
                    <Table />
            </div>
            // </Fragment>
        )
    }
}

export default Home;