import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Title </h2>



        <NextLessonNav
            prev_path='/202/html-table'
            prev_name='HTML Tables'
            next_name='Aside: Table Use Cases'
            next_path='/202/table-uses'
          />
      </div>
    )
  }
}

export default LessonTitle