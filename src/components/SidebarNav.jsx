import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return(
      <div className='Sidebar'>
        <ul>
            <li><Link className='Sidebar--Link' to='/'>Home</Link></li>

            <li>
              <Link className='Sidebar--Link' to='/101'>101</Link>
              <ul>
                <li><Link className='Sidebar--Link' to='101/display/'>Display</Link></li>
              </ul>
            </li>


        </ul>
      </div>
    )
  }
}

export default Sidebar
