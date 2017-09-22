import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NextLessonNav extends Component {
  render () {
    return (
      <div className='NextLessonNav'>
          <Link className='NextLessonNav--Link' to={this.props.prev_path}>
            ← {this.props.prev_name}
          </Link>
          <Link className='NextLessonNav--Link' to={this.props.next_path}>
            {this.props.next_name}  →
          </Link>
      </div> 
    )
  }
}

export default NextLessonNav