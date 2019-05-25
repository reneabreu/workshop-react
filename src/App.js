import React from 'react';
import style from './App.module.css';
import logo from './assets/react-chile-logo.png';

// common
import Menu from './components/common/menu/Menu';
import Navbar from './components/common/menu/Navbar';
import Breadcrumb from './components/common/menu/Breadcrumb';

// Home
import Welcome from './components/sections/home/Welcome';
import CounterCard from './components/sections/home/CounterCard';
import Table from './components/sections/home/Table'

function App() {
  return (
    <div className={style.container}>
    {/* <Menu texto="test"></Menu> sempre fechar o componente */}
    {/* <Menu texto='abcd' style={{color: 'red'}}/> */}

      {/* NAVBAR */}
      <Navbar/>

      <div className={`container ${style.borderBlue} ` }>
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
  
  
    </div>
  );
}

export default App;
