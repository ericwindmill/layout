import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaChevronDown} from 'react-icons/lib/fa'

class Sidebar extends Component {
  constructor () {
    super()
    this.state = {
      list: [],
    }
    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(e) {
    var index;
    while (!e.target.id) {
      e.target = e.target.parentNode
    }

    if (!this.state.list.includes(e.target.id)) {
      await this.setState({list : this.state.list.concat(e.target.id)})
    } else {
      index = this.state.list.indexOf(e.target.id);
      this.state.list.splice(index, 1);
      await this.setState({list: this.state.list})
    }
  }

  render() {
    return(
      <div className='Sidebar'>
        <ul className='Sidebar--List'>
            <div
              className='sublist-label'>
              <p>
                <Link to='/'>Start Here</Link>
              </p>
            </div>
            <li>
              <div
                onClick={this.handleClick}
                id='101'
                className='sublist-label'>
                  <p>101: Foundation</p>
                  <FaChevronDown />
              </div>
                { this.state.list.includes('101')
                  ? <ul className='Sidebar--Sublist'>
                      <li><Link to='/101'>Foundation Intro</Link></li>
                      <li><Link to='/101/box-model'>Box-Model, Padding & Margin</Link></li>
                      <li><Link to='/101/sizing'>Width and Height</Link></li>
                      <li><Link to='/101/box-sizing'>Box-Sizing</Link></li>
                      <li><Link to='/101/display'>Display</Link></li>
                      <li><Link to='/101/margin-auto'>Margin: Auto</Link></li>
                    </ul>
                  : null
                }
            </li>
            <li>
              <div
              onClick={this.handleClick}
              id='102'
              className='sublist-label'>
                <p>102: Position</p>
                <FaChevronDown />
              </div>
              { this.state.list.includes('102')
                ? <ul className='Sidebar--Sublist'>
                  <li><Link to='/102'>Position Intro</Link></li>
                  <li><Link to='/102/document-flow'>Document Flow</Link></li>
                  <li><Link to='/102/position-sticky'>Position: Sticky</Link></li>
                </ul>
                : null
              }
            </li>
            <li>
            <div
              className='sublist-label'
              onClick={this.handleClick}
              id='201'>
                <p>201: Floats</p>
                <FaChevronDown />
            </div>
              { this.state.list.includes('201')
                ? <ul className='Sidebar--Sublist'>
                  <li><Link to='/201'>Floats Intro</Link></li>
                  <li><Link to='/201/float'>The Float Property</Link></li>
                  <li><Link to='/201/clear'>The Clear Property</Link></li>
                  <li><Link to='/201/clearfix'>The Clearfix Hack</Link></li>
                </ul>
                : null
              }
            </li>
            <li>
              <div
                className='sublist-label'
                onClick={this.handleClick}
                id='301'
                >
                <p>301: Flexbox</p>
                <FaChevronDown />
              </div>
                { this.state.list.includes('301')
                  ? <ul className='Sidebar--Sublist'>
                    <li><Link to='/301'>Flexbox Intro</Link></li>
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
                  : null
                }
            </li>
            <li>
              <div
                className='sublist-label'
                onClick={this.handleClick}
                id='302'>
                <p>302: Grid</p>
                <FaChevronDown />
              </div>
              { this.state.list.includes('302')
                ? <ul className='Sidebar--Sublist'>
                  <li><Link to='/302'>Grid Intro</Link></li>
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
                  <li><Link to='/302/grid-auto-placement'>Grid Auto Placement</Link></li>
                  <li><Link to='/302/grid-auto-flow'>Grid-Auto-Flow</Link></li>
                  <li><Link to='/302/layering'>Layering with Z-Index</Link></li>
                  <li><Link to='/302/grid-order'>Grid Order</Link></li>
                  <li><Link to='/302/justify-items'>Justify Items</Link></li>
                  <li><Link to='/302/align-items'>Align Items</Link></li>
                  <li><Link to='/302/justify-align-content'>Justify- and Align-Content</Link></li>
                  <li><Link to='/302/justify-align-self'>Justify- and Align-Self</Link></li>
                </ul>
                : null
              }
            </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
