import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return(
      <div className='Footer'>
        <p>This is a project by <a href='http://ericwindmill.com'>Eric Windmill</a></p>
        <p>Elsewhere</p>
        <ul>
          <li>Homepage: <a href='http://ericwindmill.com' > ericwindmill.com </a></li>
          <li>Twitter: <a href='https://twitter.com/ericwindmill' > @ericwindmill </a></li>
          <li>Github: <a href='https://github.com/ericwindmill' > ericwindmill </a></li>
          <li>Get in Touch: <a href='mailto:eric@ericwindmill.com'>eric@ericwindmill.com</a></li>
        </ul>
      </div>
    )
  }
}

export default Footer