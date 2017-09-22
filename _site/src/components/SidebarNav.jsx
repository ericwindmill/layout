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
                <li><Link to='/102/document-flow'>Document Flow</Link></li>
                <li><Link to='/102/position-sticky'>Position: Sticky</Link></li>
              </ul>
            </li>
            <li>
              <li><Link to='/201'>201: Floats</Link></li>
              <ul>
                <li><Link to='/201/float'>The Float Property</Link></li>
                <li><Link to='/201/clear'>The Clear Property</Link></li>
                <li><Link to='/201/clearfix'>The Clearfix Hack</Link></li>
              </ul>
            </li>
            {/* <li>
              <li><Link to='/202'>201: Tables</Link></li>
              <ul>
                <li><Link to='/202/html-table'>HTML Tables</Link></li>
                <li><Link to='/202/css-table'>CSS Table Properties</Link></li>
                <li><Link to='/202/table-uses'>Table Use Cases</Link></li>
              </ul>
            </li> */}
            <li>
              <li><Link to='/301'>Flexbox</Link></li>
              <ul>
                <li><Link to='/301/display-flex'>Flex (& Inline-Flex)</Link></li>
                <li><Link to='/301/flex-direction'>Flex-Dierction</Link></li>
                <li><Link to='/301/flex-wrap'>Flex-Wrap</Link></li>
                <li><Link to='/301/flex-flow'>Flex-Flow</Link></li>
                <li><Link to='/301/flex-terms'>Aside: Flex Terminology</Link></li>

              </ul>
            </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
