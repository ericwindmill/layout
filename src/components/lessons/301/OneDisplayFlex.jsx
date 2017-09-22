
import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2>Setting Up Your Flexbox with Display: Flex and Inline-Flex</h2>
        <p>
             Flex gives the <code>display</code> property a few more options. <code>Flex</code> and <code>inline-flex</code>. These are entirely new ways to think about an elements role on a page. Elements are now (more or less) simply containers, rather than semantic elements.
        </p>
        <ol> The basic setup for a flexbox:
          <li>A parent HTML element, which is the container.</li>
          <li>Set the container's <code>display</code> to <code>flex</code>.</li>
          <li>All of the <em>immediate</em> children are now 'flex-items'.</li>
        </ol>
        <p>Click the 'Toggle Flex' button to add <code>display: flex</code> to the following container.
        </p>
        <Codepen
            hash='gxEJwj'
            user='ericwindmill'
            tab='html, result'
            height='400'
          />

        <p>
        <h3>What's actually happening here?</h3> Setting <code>display: flex</code> creates a flexible element who's width is 100% (like a block element), and who's height is as tall as it needs to be to fit the content. It also automatically makes the children 'flex items', which we'll learn how to manipulate a little later on.
        </p>
        <p>
        As I mentioned, <code>display: inline-flex</code> also exists. It's the same as `flex`, except the flex-container is made an inline-element, so the width takes up only as much space as it needs, and it doesn't force a new line-break.
        </p>

            hash='zdbVrp'
            user='ericwindmill'
            tab='html, result'
            height='400'
          />
          <h3> API </h3>
          <SyntaxHighlighter
            style={monokai}
            language='html'
            children={
`<div class='container'>
  <div class='item-1 item'>One</div>
  <div class='item-2 item'>Two</div>
  <div class='item-3 item'>Three</div>
  <div class='item-4 item'>Four</div>
  <div class='item-5 item'>Five</div>
  <div class='item-6 item'>Six</div>
</div>`
            }/>
            <SyntaxHighlighter
              style={monokai}
              langauge='css'
              children={
`  .container {
    display: flex | inline-flex;
  }`
              } />

        <NextLessonNav
            prev_path='/301/'
            prev_name='Intro to Flexbox'
            next_name='Arrange Items in Rows or Columns with Flex-Direction'
            next_path='/301/flex-direction'
          />
      </div>
    )
  }
}

export default LessonTitle