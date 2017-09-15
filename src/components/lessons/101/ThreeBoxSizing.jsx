import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'

class ThreeBoxSizing extends Component {

  render () {  
    return(
      <div>
        <h2>Box-Sizing: Border-Box</h2>
        <section>
          <p><code>box-sizing: border-box</code> is a property added later to CSS that makes the box-model more intuitive. When you think about an element, the <em>total</em> space it takes up is its content plus padding plus border, and the margin is it's personal space. </p>
          <p>That's exactly what the `border-box` fix does for us. It allows us to treat the element as a whole in our CSS. With <code>boxsizing: border-box</code> turned on, when you set the 'width' of an item, it's taking border and padding into account. The content shrinks to allow for the explictly set border and padding.</p>
          
          <img 
            src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1503687474/blog_posts/CSSBoxBoxModel-BordeRBox.png' 
            height='300px'
            style={{margin:'auto',display:'block'}}
            alt='CSS Box Model'
          ></img>
        </section>
        
        <SyntaxHighlighter
          style={monokai}
          language='css'
          children={
`/*It's common to globally reset your elements to border-box*/
* {
  box-sizing: border-box;
}`
          }></SyntaxHighlighter>


        <NextLessonNav
          prev_path='/101/sizing'
          prev_name='Width and Height'
          next_name='The Display Property'
          next_path='/101/display'
        />
      </div>
    )
  }
}

export default ThreeBoxSizing