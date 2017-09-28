import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {TiSocialTwitter} from 'react-icons/lib/ti';


class TopNav extends Component {
  render() {
    return(
      <div className='TopNav'>
        <ul>
          <li><Link to='/'>Start Here</Link></li>
          <li><Link to='/resources'>Resources</Link></li>
        </ul>
        <ul>
          <li><a href='https://twitter.com/ericwindmill'>
          <TiSocialTwitter className='Twitter-Icon'/>
          </a></li>
        </ul>
      </div>
    )
  }
}

export default TopNav