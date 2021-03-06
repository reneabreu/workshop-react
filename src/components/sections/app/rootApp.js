import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import style from './rootApp.module.css';

import Navbar from '../../common/menu/Navbar'
import Home from '../home/Home'
import Orders from '../orders/Orders'
import Services from '../services/Services'

class App extends Component {
    render() {

        return (
            <div className={style.container}>
                {/* <h1>FUNCIONA</h1> */}
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/orders' component={Orders} />
                        <Route exact path='/services' component={Services} />
                        {/* <Route path='*' component={} />  NOT FOUND*/}
                    </Switch>
                </BrowserRouter>
            </div>
       )
    }
}

export default App;