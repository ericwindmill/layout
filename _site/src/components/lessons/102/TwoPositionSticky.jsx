import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'
import Codepen from 'react-codepen'

class LessonTitle extends Component {
  render () {  
    return(
      <div>
        <h2> Position: Sticky </h2>
        <p><code>position: sticky</code> is a new feature of CSS that positions elements relatively until a certain parameter is met. In laymans terms, an element is 'relative' until your screen scrolls to a certain point on a page, then the element is treated as 'fixed'. 
        </p>
        <p>
          To make an element 'sticky', you have to set it's position element and also either 'top', 'bottom', 'left', or 'right'. The directional element is what tells CSS when to treat the element as 'fixed'
        </p>
        <SyntaxHighlighter 
            language='html' 
            style={monokai} 
            children={
  `<dl>
    <dt> Miniture Pigs </dt>
      <dd>Small</dd>
      <dd>Cute</dd>
      <dd>Pink</dd>
    <dt> Miniture Yorkis </dt>
      <dd>Small</dd>
      <dd>Yappy</dd>
      <dd>Annoying</dd>
</dl>`}></SyntaxHighlighter>

        <SyntaxHighlighter 
            language='css' 
            style={monokai} 
            children={
  `dl {
    position: sticky;
    top: 0px;
  }
  `}></SyntaxHighlighter>

        <p>
          This is often used for fixed navigation and list's sub-headings. 
        </p>
        <Codepen
          height='400'
          hash='KvxdOz'
          user='ericwindmill'
          tab='result'
          />
          <NextLessonNav
            prev_path='/102/document-flow'
            prev_name='Document Flow'
            next_name='Intro To Floats'
            next_path='/201'
          />
      </div>
    )
  }
}

export default LessonTitle