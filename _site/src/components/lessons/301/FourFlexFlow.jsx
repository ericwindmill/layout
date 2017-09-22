import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class FourFlexFlow extends Component {
  render () {
    return(
      <div>
        <h2> Setting Direction and Wrap with Flex-Flow </h2>
        <p>
          <code>Flex-flow</code> is shorthand for combining flex-direction and flex-wrap.
        </p>
        <p>
          <code>flex-flow</code> can take any direction or wrap property on its own, or you can use both by putting the direction first, followed by the wrap value you want to use. All of the following are valid:
        </p>

        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'> and <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;
`}/>
        <p>
          This information is plucked right from [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow).
        </p>

        <NextLessonNav
            prev_path='301/flex-wrap'
            prev_name='Wrapping your Elements with Flex-Wrap'
            next_name='Aside: Knowing Flexbox Alignment Terminology'
            next_path='/301/flex-terms'
          />
      </div>
    )
  }
}

export default FourFlexFlow