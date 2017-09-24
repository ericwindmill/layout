import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'

class SixteenFlexShorthand extends Component {
  render () {
    return(
      <div>
        <h2> Combine Flex Properties with the Flex Shorthand </h2>
        <p>
          Let's get back to the <code>flex</code> property. This can be used short hand for <code>flex-grow</code>, <code>flex-shrink</code> and <code>flex-basis</code>.
        </p>
        <p>
          The flex property is pretty... flexible... in what it accepts as properties.
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`/* Explicitly set all three:
  flex-grow | flex-shrink | flex-basis
 */
.flex-item {
  flex: 1 2 10%;
}

/* One value, unitless number: flex-grow */
.flex-item {
  flex: 1;
}

/* One value, width/height number: flex-basis */
.flex-item {
  flex: 2.5em;
}

/* Two values: unitless number: flex-grow | unitless number: flex-shrink */
.flex-item {
  flex: 1 2;
}

/* Two values: unitless number: flex-grow | width/height number: flex-basis */
.flex-item {
  flex: 2 2.5em;
}`} />
  <p>
    Remember that the default values for all three properties are set to (in <code>flex</code> terms) <code>0 1 auto</code>. So setting <code>flex: 1</code> is shorthand for <code>flex: 1 1 auto</code>. Another way to write that shorthand would be write <code>flex: auto</code>.
  </p>
  <p>
    There a handful of values that <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/flex'>MDN</a> refers to as 'basic values'. "For most purposes, authors should set flex to one of the following values: auto, initial, none, or a positive unitless number." - <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/flex'>MDN Web docks</a>.
  </p>
  <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.flex-item {
  flex: auto;
  /* Equivelent to 1 1 auto.
      The item is sized according to its height and width, but absorbs extra space when space is given by flex.*/
}

.flex-item {
  flex: initial;
  /* Default value.
    Equivelent to 0 1 auto.
    The item is sized according to its height and width, but doesn't grow. It wil shirnk to the size of it's inner conent if necessary*/
}

.flex-item {
  flex: none;
  /* Equivelent to 0 0 auto.
    The item is sized according to its height and width, but isn't flexible at all. */
}

.flex-item {
  flex: <positive number>;
  /* Equivelent to <positive number> 1 0.
    The item starts off by receiving it's portion of the extra space.
  */
}`} />

        <NextLessonNav
            prev_path='/301/flex-shrink'
            prev_name='Account for Too Little Space with Flex-Shrink'
            next_name='Flex Basis w/ Flex Wrap Gotcha'
            next_path='/301/flex-basis-wrap'
          />
      </div>
    )
  }
}

export default SixteenFlexShorthand