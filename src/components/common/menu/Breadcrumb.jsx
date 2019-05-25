import React from 'react';

const Breadcrumb = (props) => {

    return(
        <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                  <li><a href="../">Bulma</a></li>
                  <li><a href="../">Templates</a></li>
                  <li><a href="../">Examples</a></li>
                  <li className="is-active"><a href="#" aria-current="page">Admin</a></li>
              </ul>
            </nav>
    )
}

export default Breadcrumb;