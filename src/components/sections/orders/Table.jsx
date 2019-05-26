import React from 'react'

const Table = (props) => {

    return(
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
    )
}

export default Table;