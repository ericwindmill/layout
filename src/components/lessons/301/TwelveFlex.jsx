import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> Control the Responsive Size of Elements with the Flex Property </h2>
        <p>
          Flex-items accept a property called <code>flex</code>. It's actually a shorthand for three properties: <code>flex-basis</code>, <code>flex-grow</code> and <code>flex-shrink</code>.
        </p>
        <p>
          These properties control the size of the flex-item in relationship to it's sibling flex-items. By using these properties, you can accurately control the size of your items in arbitrarily different sized windows.
        </p>
        <p>
          When setting flex properties, the golden question to keep in mind is, 'How do I want these items to be laid out when I have extra space or not-enough space?'
        </p>

          <ul>The names are telling of what the properties do:
            <li><code>flex-basis</code> sets the base side for a flex-item.</li>
            <li><code>flex-grow</code> dictates how much flex-items grow in relationship to eachother when the view port is larger than expected.</li>
            <li><code>flex-shrink</code> dictates how much flex-items shrink in relationship to eachother. </li>
          </ul>



        <NextLessonNav
            prev_path='/301/flex-order'
            prev_name='Change the Order of Items with Order'
            next_name="Set an Item's Starting Size with Flex-Basis"
            next_path='/301/flex-basis'
          />
      </div>
    )
  }
}

export default LessonTitle