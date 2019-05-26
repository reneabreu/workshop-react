import React, { Component, Fragment } from 'react';

import Table from './Table';

const dataBreadcrumb = [
    { 'name': 'Inicio', 'url': '/', 'isSelected':false, },
  ];
  
class Orders extends Component {

    componentDidMount() {
        this.callAPI();
    }
    
    callAPI = async () => {
        const response = await fetch('api/orders');
        console.log(response);
    }

    render () {
        return(
            <Fragment>
            {/* TABLE */}
            <Table />
            </Fragment>
        )
    }
}

export default Orders;