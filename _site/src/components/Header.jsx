import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return(
      <div className='Header'>
        <Link className='Header--PageTitle' to='/'>
          <h1>CSS Layout By Example</h1>
        </Link>
      </div>
    )
  }
}

export default Header