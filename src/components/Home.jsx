import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'CSS Layout: Zero to One'
    }
  }
  render () {
    return(
      <div>
        <h2> {this.state.title} </h2>
        <p> This is a comprehensive guide to building web layouts with CSS. </p>
        <p> If you're new to CSS, getting started can be overwhelming. I created this page because the best thing I ever did was start at the beginning. </p>
        <p> This guide will cover every bit of CSS Layout from the basics (and beginnings) to today's best tools.</p>
        <dl>
          <dt>101: The Foundation</dt>
          <dd>Display</dd>
          <dd>Margins, Widths, Sizing</dd>
          <dd>Position</dd>

          <dt>200 Level: CSS2 -- Hacks and Tools</dt>
          <dd>201: Floats</dd>
          <dd>202: HTML Table Hack</dd>

          <dt>300 Level: CSS3 -- Full Layout Tools</dt>
          <dd>301: Flexbox</dd>
          <dd>302: Grid</dd>

          <dt>400 Level: Practical Examples -- Choosing the Right Tools!</dt>
          <dd>Prac Examp 1</dd>
          <dd>Prac Examp 2</dd>
          <dd>Prac Examp 3</dd>
        </dl>

          <Link className='NextLessonNav--Link' 
            to='/101'>
              101: Foundation →
          </Link>

      </div>
    )
  }
} 

export default Home