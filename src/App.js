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
          <div className="columns">
            <div className="column is-12">
              <div className="card events-card">

                <header className="card-header">
                    <p className="card-header-title">Últimas Ordenes</p>
                    <a href="#" className="card-header-icon" aria-label="more options">
                        <span className="icon">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </a>
                </header>

                <div className="card-table">
                  <div className="content">
                  <table className="table is-fullwidth is-striped">
                    <tbody>
                        <tr>
                            <td width="5%"><i className="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a className="button is-small is-primary" href="#">Editar</a></td>
                        </tr>
                        <tr>
                            <td width="5%"><i className="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a className="button is-small is-primary" href="#">Editar</a></td>
                        </tr>
                        <tr>
                            <td width="5%"><i className="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a className="button is-small is-primary" href="#">Editar</a></td>
                        </tr>
                        <tr>
                            <td width="5%"><i className="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a className="button is-small is-primary" href="#">Editar</a></td>
                        </tr>  
                      </tbody>
                    </table>
                  </div>
                </div>

                <footer className="card-footer">
                    <a href="#" className="card-footer-item">View All</a>
                </footer>

              </div>
            </div>
          </div>
        </div>
  
  
    </div>
  );
}

export default App;
