import React, { Component } from 'react'
import NextLessonNav from '../../NextLessonNav'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/styles'

class OneBoxModel extends Component {
  render () {  
    return(
      <div>
        <h2>The CSS Box Model</h2>
        <p>
          All CSS layout theory is based on the box-model. Every element rendered to the DOM is box.  The size of that box is based on the content within the tag plus the <code>padding</code>, <code>border</code>, and <code>margin</code>.
        </p>

        <p>
          Open up your dev-tools, go to `elements` and click on `computed` and you'll see this. This is a handy tool that shows you the actual size of your element.
        </p>

        <img 
          src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1503687474/blog_posts/CSSBoxModel.png' 
          height='300px'
          style={{margin:'auto',display:'block'}}
          alt='CSS Box Model'
        ></img>
        
        <p>
          When laying out a page, you have to calculate the size of the content, padding, border and margin of an element. Setting the <code>width</code> and <code>height</code> properties simply manipulate the content size, not the total space the item will take up on the page.
        </p>
        
        <section>
          <h3>Padding</h3>
          <p><code>padding</code> is the space inbetween the content and border.</p>
          <SyntaxHighlighter 
            language='css' 
            style={monokai} 
            children={
  `.element {
    /* Same on all Sides */
    padding: 10px;
    /* vertical | horizontal */
    padding: 10% 20%;
    /*top | right | bottom | left*/
    padding: 5px 0 10px 20%;
  }`}></SyntaxHighlighter>
        </section>

        <section>
          <h3>Border</h3>
          <p>
            <code>Border</code>is the physical border you can put around the conent and padding. Theoretically you can give it as much thickness as you'd like, but its generally not used to add significant size to an element.
          </p>
          <SyntaxHighlighter
            language='css'
            style={monokai}
            children={
  `.element {
    /*thickness | style | color*/
    border: 1px solid lightslategrey;
  }`}></SyntaxHighlighter>
        </section>
        
        <section>
          <h3>Margin</h3>
          <p>
            <code>margin</code> is the space inbetween the border of an element and the other elements around it. In most cases, margin between two elements collapses. 
          </p>
          <p>
            Think about margin like an elements 'personal space'. If an element and an element right underneath it both require <code>15px</code> of personal space, then the total space between them only needs to be 15px, not 30. 
          </p>
          <SyntaxHighlighter 
            language='css' 
            style={monokai} 
            children={
  `.element {
    /* Same on all Sides */
    margin: 10px;
    /* vertical | horizontal */
    margin: 10% 20%;
    /*top | right | bottom | left*/
    margin: 5px 0 10px 20%;
  }`}></SyntaxHighlighter>
        </section>     
        <NextLessonNav
          prev_path='/101/'
          prev_name='Layout 101: Foundation'
          next_name='Width and Height'
          next_path='/101/sizing'
        />
      </div>
    )
  }
}

export default OneBoxModel