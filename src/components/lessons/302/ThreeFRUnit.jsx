import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class ThreeFrUnit extends Component {
  render () {
    return(
      <div>
        <h2>Flexible Grid Tracks with the FR Unit</h2>
        <p>
          <code>fr</code> is a new unit that refers to a <em>fraction</em> of the space left over. It's sometimes called the 'flex' unit, becuase it very much requires the same thinking as flexbox. The question to answer with <code>fr</code> is, "How much space should each column/row take up, even though I don't know how much total space there is?"
        </p>
        <p>
          <code>fr</code> is used to set the sizes of columns and rows using <code>grid-template-columns</code> and <code>grid-template-rows</code>.
        </p>
        <p>
          A simplest way to use <code>fr</code> unit:
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* This is the same as 33% 33% 33%; */
}`}/>
        <p>
          A slightly more complex example:
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  /* This is the same as 25% 50% 25%; */
}`}/>
        <p>
          This is fine, but at this point they're just slightly better than percentages, because they remove basic math.
        </p>
        <p>
          The question again, is "How much of <strong>the remaining</strong> space should each column/row take up, even though I don't know how much total space there is?"
        </p>
        <p>
          Remaining is the key:
        </p>
        <SyntaxHighlighter
          language='css'
          style={monokai}
          children={
`.grid-container {
  display: grid;
  grid-template-rows: 250px 2fr 1fr;
}`} />
        <p>
          In this example, we've given the first column 250pixels, and then taken the <em>remaining</em> space and split it two-thirds to column two and one-third to column three. That is the power of the <code>fr</code>.
        </p>
        <p>
          The true power of the <code>fr</code> unit is that it can mix with other units with no problem:
        </p>
        <Codepen
          hash='JrbBrR'
          user='ericwindmill'
          tab='result'
          height='500'
        />

        <NextLessonNav
            prev_path='/302/define-grid'
            prev_name='Defining a Grid'
            next_name='Defining default Row and Col sizes'
            next_path='/302/grid-auto-col-and-row'
          />
      </div>
    )
  }
}

export default ThreeFrUnit