import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TopNav from './TopNav'

class Header extends Component {
  render() {
    return(
      <div className='Header'>
        <Link className='Header--PageTitle' to='/'>
          <h1>Layout By Example</h1>
        </Link>
        <TopNav />
      </div>
    )
  }
}

export default Header