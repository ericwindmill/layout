import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class NineAlignContent extends Component {
  render () {
    return(
      <div>
        <h2> Align the Collective Content Along the Cross-Axis </h2>
        <p>
          <code>Align-content</code> is the true opposite <code>justify-content</code>. It takes the same five properties as <code>justify-content</code>, and distributes the items among the cross-axis.
        </p>
        <ul>
          <li><code>flex-start</code></li>
          <li><code>center</code></li>
          <li><code>flex-end</code></li>
          <li><code>space-around</code></li>
          <li><code>space-between</code></li>
        </ul>

        <p>
          For this exercise, forget about flex-direction. For the sake of simplifying explanation, we're only concerned with 'row', for now.
        </p>
        <p>
          The difference between <code>align-content</code> and <code>align-items</code> is that <code>align-content</code> basically requires wrapping <em>and</em> that the container has a height greater than the total height of the rows.
        </p>
        <p>
          Think about it like this: <code>align-content</code> implies that you're manipulating the entirety of the items as a group <em>and their relationship to eachother</em>, where <code>align-items</code> implies that you're manipulating the individual items.  The following Codepen already has <code>flex-flow</code> set to <code>wrap</code> and explicit height. If there was no wrapping, flexbox wouldn't know how to distribute the white-space, because the content <code>as a whole</code> is being manipulated. If there's only one row, then you're actually concerned with <code>align-items</code>.
        </p>
        <p>
          This is kind of a wonky concept to explain, but it's made much easier if you can see it:
        </p>
        <Codepen
            hash='MvNoGa'
            user='ericwindmill'
            tab='result'
            height='400'
          />
        <p>
          If you did switch the <code>flex-direction</code> to 'column', align-items would work the same way, but on the opposite axes.
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
            `.container {
                display: flex | inline-flex;
                align-content: flex-start | center | flex-end | space-around | space-between;
            }`} />

        <NextLessonNav
            prev_path='/301/align-baseline'
            prev_name='Align Items by their Content with Baseline'
            next_name='Align Individual Items with Align-Self'
            next_path='/301/align-self'
          />
      </div>
    )
  }
}

export default NineAlignContent