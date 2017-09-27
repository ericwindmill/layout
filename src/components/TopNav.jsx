import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TopNav extends Component {
  render() {
    return(
      <div className='TopNav'>
        <ul>
          <li><Link to='/'>Start Here</Link></li>
          <li><Link to='/resources'>Resources</Link></li>
        </ul>
        <ul>
          <li><a href='https://twitter.com/ericwindmill'>Twitter</a></li>
          <li><a href='https://github.com/ericwindmill'>Github</a></li>
        </ul>
      </div>
    )
  }
}

export default TopNav