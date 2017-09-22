import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class TableIntro extends Component {
  render () {
    return(
      <div>
        <h2> HTML / CSS Tables </h2>
        <p> Tables are a polarizing topic in layout. This will just be a basic introduction into tables, and how they're used for layout.
        </p>
        <p>
          HTML Tables are used to display tabular data (in rows and columns). In laymens, <code>table</code> and it's associated tags are used to create... tables. Here's an example:
        </p>
        <Codepen
            hash='JrRjJJ'
            user='ericwindmill'
            tab='result'
            height='400'
          />

        <h3> The Full List of Table Tags</h3>
        <SyntaxHighlighter
          style={monokai}
          language='html'
          children={
`<table> <!-- defines a table -->
<th> <!-- defints a cell in a table -->
<tr> <!-- defines a row in a table -->
<td> <!-- defines a cell in a table -->
<caption> <!-- give a table a caption -->
<colgroup> <!-- defines a column - used for formatting -->
<col> <!-- used to format columns within a col group -->
<thead> <!-- give the table a header row -->
<tbody> <!-- define the main content of the table -->
<tfoot> <!-- give the table a footer row -->
`}/>
          <h3>Making Tables with CSS</h3>
          <p>
            CSS also has a table aspect, that allows you to change any element into a table or table cell.  Here's a little sample.
          </p>
          <SyntaxHighlighter
            language='html'
            style={monokai}
            children={
`<div>
  <span></span>
  <span></span>
</div>`} />
          <SyntaxHighlighter
            language='css'
            style={monokai}
            children={
`div {
  display: table;
}
span {
  display: table-cell;
}`} />


        <NextLessonNav
            prev_path='/201/clearfix'
            prev_name='The Clearfix Hack'
            next_name='HTML Tables'
            next_path='/202/html-table'
          />
      </div>
    )
  }
}

export default TableIntro