import React from 'react';

class Menu extends React.Component {
    render(){
    const { texto, color } = this.props; // As props são recebidas dentro do método render

        return(
         <h1 { ...this.props }>{ texto } </h1>
        )
    }
}

export default Menu;

// const  Menu = (props) => {

//     const { texto, color } = props;
//     console.log(props);

//     return (
//         <h1>{ texto } { color }</h1>
//         // <h1(...props)>{...childrens}</h1>
//     )
// }

// export default Menu;