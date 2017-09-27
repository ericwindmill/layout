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
              <li><Link to='/301'>301: Flexbox</Link></li>
              <ul>
                <li><Link to='/301/display-flex'>Flex (& Inline-Flex)</Link></li>
                <li><Link to='/301/flex-direction'>Flex-Dierction</Link></li>
                <li><Link to='/301/flex-wrap'>Flex-Wrap</Link></li>
                <li><Link to='/301/flex-flow'>Flex-Flow</Link></li>
                <li><Link to='/301/flex-terms'>Aside: Flex Terminology</Link></li>
                <li><Link to='/301/justify-content'>Justify-Content</Link></li>
                <li><Link to='/301/align-items'>Align-Items</Link></li>
                <li><Link to='/301/align-baseline'>Align-Items: Baseline</Link></li>
                <li><Link to='/301/align-content'>Align-Content</Link></li>
                <li><Link to='/301/align-self'>Align-Self</Link></li>
                <li><Link to='/301/flex-order'>Flex Order</Link></li>
                <li><Link to='/301/flex'>Flex Property</Link></li>
                <li><Link to='/301/flex-basis'>Flex-Basis</Link></li>
                <li><Link to='/301/flex-grow'>Flex-Grow</Link></li>
                <li><Link to='/301/flex-shrink'>Flex-Shrink</Link></li>
                <li><Link to='/301/flex-shorthand'>Flex Shorthand</Link></li>
                <li><Link to='/301/flex-basis-wrap'>Flex-Basis w/ Wrap</Link></li>
              </ul>
            </li>
            <li>
              <li><Link to='/302'>302: Grid</Link></li>
              <ul>
                <li><Link to='/302/grid-terms'>Grid Terminology</Link></li>
                <li><Link to='/302/define-grid'>Define a Grid</Link></li>
                <li><Link to='/302/fr-unit'>The FR Unit</Link></li>
                <li><Link to='/302/grid-auto-col-and-row'>Grid-Auto-Column (and Row)</Link></li>
                <li><Link to='/302/grid-gap'>Grid Gap</Link></li>
                <li><Link to='/302/repeat'>Repat( )</Link></li>
                <li><Link to='/302/minmax'>Minmax( )</Link></li>
                <li><Link to='/302/autofill-autofit'>Autofill & Autofit</Link></li>
                <li><Link to='/302/grid-template-areas'>Grid-Template-Areas</Link></li>
                <li><Link to='/302/placing-grid-items'>Placing Grid Items</Link></li>
                <li><Link to='/302/grid-row-and-column'>Grid-Row and Grid-Column</Link></li>
                <li><Link to='/302/span'>The Span Keyword</Link></li>
                <li><Link to='/302/named-lines'>Named Grid Lines</Link></li>
                <li><Link to='/302/grid-area'>Grid-Area</Link></li>

              </ul>
            </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
