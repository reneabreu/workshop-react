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

// function App() {
  class App extends React.Component {
    constructor(props) 
    { 
        super(props); 
        this.state = { 
          time : new Date().toLocaleTimeString()
        }; 
    } 

    componentWillMount() 
    { 
      // Se invoca justo antes de que el componente se monte en el DOM
      // Antes del Render()
        console.log("-1.- componentWillMount()"); 
    } 

    tick() 
    { 
        this.setState({ 
            time : new Date().toLocaleTimeString()
        }); 
    } 

  render() {
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

componentDidMount() 
{ 
  // Se invoca justo después de que el componente se monta en el DOM
  // Despúes del Render()
    console.log("1.- componentDidMount()"); 
    console.log("---------------------------------"); 
    this.timer = setInterval( 
      () => this.tick(), 
      1000); 
   
} 
componentDidUpdate() 
{ 

  // Se invoca después de que el componente se vuelve a entregar, es decir, 
  // esta función se invoca una vez después de que la función render () 
  // se ejecuta después de la actualización de State o Props.
  
    console.log("2.- componentDidUpdate()"); 
} 

shouldComponentUpdate(nextProps, nextState) 
  { 
    // Se invoca antes de representar un componente ya montado cuando se reciben nuevos props o estados. 
    // Si se devuelve falso, los siguientes pasos de renderización no se llevarán a cabo

      console.log("3.- shouldComponentUpdate()"); 

      return false; 
  } 

  componentWillUpdate() 
  { 
    // se invoca antes de que el componente se vuelva a entregar, es decir, 
    // esta función se invoca una vez antes de que la función render () 
    // se ejecute después de la actualización de State o Props.

      console.log("4.- componentWillUpdate()"); 
      console.log("---------------------------------"); 
  } 


  componentWillUnmount() 
  { 
      // clearInterval(this.timer); 
  }


  componentWillRecieveProps(newProps) 
  {
    // Función exclusiva de Props y es independiente de los estados
    // Se invoca antes que el componente montado vuelva a asignar sus propiedades
    // if (this.props !== newProps) { 
    //     console.log(" New Props have been assigned "); 
    //     // Use this.setState() to rerender the page. 
    // } 
  }
}

export default App;
