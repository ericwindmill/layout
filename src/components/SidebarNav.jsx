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
                <li><Link to='/101/box-model'>Box-Model, Padding & Margin</Link></li>
                <li><Link to='/101/sizing'>Width and Height</Link></li>
                <li><Link to='/101/box-sizing'>Box-Sizing</Link></li>
                <li><Link to='/101/display'>Display</Link></li>
                <li><Link to='/101/margin-auto'>Margin: Auto</Link></li>
              </ul>
            </li>
            <li>
              <li><Link to='/102'>102: Position</Link></li>    
              <ul>
                <li><Link to='/102/absolute-or-fixed'>Position: Absolute v Fixed</Link></li>
                <li><Link to='/102/position-sticky'>Position: Sticky</Link></li>
              </ul>
            </li>


        </ul>
      </div>
    )
  }
}

export default Sidebar
