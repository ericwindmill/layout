import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import Codepen from 'react-codepen'

class FlexIntro extends Component {
  render () {
    return(
      <div>
        <h2> What is Flexbox (and why use it)?</h2>
        <p>
          Flexbox, introduced in CSS3, has become the go-to layout tool for web developers. The flex layout was the first layout tool introduced specifically to handle responsive layout design. Its used to layout elements in a container and space them properly, even when their size is unknown. In short, it gives containers the ability to alter it's children's sizes to best fit the space.
        </p>
        <p>

        </p>
        <ul><strong>Why learn flexbox?</strong>
          <li>It really is becoming <em>the</em> layout standard. You're bound to run into over and over again.</li>
          <li>It's the quickest way to go from brand-new-to-CSS to great layouts.</li>
          <li>It's so popular that it's the default display for all elements in React Native, which is probably going to be pave the way for the future of mobile development. If you're a new-ish developer today, you should have your eyes on mobile / React Native. It's the future (in my humble opinion).</li>
          <li>Learning flexbox makes learning CSS Grid really easy, and combined they're all you need to build modern, responsive layouts.</li>
        </ul>
        <p>
          In order to use flexbox, you kind of have to take all your knowledge about floats, percentages and previous layout tools and disregard them for a minute. If you're newer to CSS and don;t have any knowledge about tables or floats, you're actually starting from a better place.
        </p>
        <p>
          Oh, and flexbox is available in <a href='http://caniuse.com/#feat=flexbox'>ALL browsers</a>.
        </p>

        <NextLessonNav
          prev_path='/102/position-sticky' // TODO
          prev_name='Position: Sticky' // TODO
          next_name='Setting up Your Flexbox with Display: Flex (or Inline-Flex)'
          next_path='/301/display-flex'
        />

      </div>
    )
  }
}

export default FlexIntro