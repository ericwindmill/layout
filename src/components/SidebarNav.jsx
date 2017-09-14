import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return(
      <div className='Sidebar'>
        <ul className='Sidebar--List'>
            <li><Link className='Sidebar--Link' to='/'>Home</Link></li>

            <li>
              <Link to='/101'>101: Foundation</Link>
              <ul className='Sidebar--Sublist'>
                <li><Link to='/101/display'>Display</Link></li>
                <li><Link to='/101/display-defaults'>Display Defaults</Link></li>
              </ul>
            </li>


        </ul>
      </div>
    )
  }
}

export default Sidebar
