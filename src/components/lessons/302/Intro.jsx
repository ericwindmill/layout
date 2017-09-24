import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {
    return(
      <div>
        <h2> What the Heck is Grid? </h2>
        <p>
          CSS Grid is the newest (and hottest) layout tool in CSS. It's a 2-demensional layout system (where as Flexbox is one demensional). When laying out a Flexbox, you're telling items how to align along a row or column (even with wrap). In Grid, you can control both the columns <em>and</em> rows, making Grid perhaps the first 'complete' layout tool built into CSS.
        </p>
        <p>
          There are a couple big advantages Grid, besides the core functionality. The first is that you can use completely semantic HTML, and then lay out that HTML using CSS. This is big win for accessibilty. Before grid, you'd often set up a flexbox using nothing but <code>div</code>s.
        </p>
        <p>
          Another big plus for Grid is that the API borrows a lot from Flexbox. Many of the properties are the same, and thus it's easy to learn if you've learned Flexbox. In fact, if you establish a grid with a single row or column, it behaves almost like a flexbox.
        </p>
        <p>
          <strong>Big tip</strong>: Install the Firefox Nightly browser and use it for development, as it has a DevTools feature that allows you to visualize the Grid you're working with.
        </p>
        <p>
          As of March 2017, Grid is supported by all major browsers. <a href='http://caniuse.com/#feat=css-grid'>Caniuse</a>
        </p>
        <p>Here's an example of a basic webpage laid out completely with Grid:</p>
        <Codepen
            hash='Jrbpjw'
            user='ericwindmill'
            tab='result'
            height='700'
          />


          <p><strong>Here's a basic grid, and what I'll be using as an example throughout this guide. Don't let the current CSS scare you, we're going to build up to this (and go far beyond it).</strong></p>
          <Codepen
            hash='QqGmRe'
            user='ericwindmill'
            tab='result'
            height='500'
          />
        <NextLessonNav
            prev_path='/301/flex-basis-wrap'
            prev_name='The Flex Wrap w/ Flex Basis Gotcha'
            next_name='Some Basic Grid Terminology'
            next_path='/302/grid-terms'
          />
      </div>
    )
  }
}

export default LessonTitle