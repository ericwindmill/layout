import React, { Component } from 'react'

class Resources extends Component {
  render() {

    return (
      <div>
        <h2>Resources</h2>
        <h3>CSS Layout Docs and Concepts</h3>
        <ul>
          <li><a href='https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout'>MDN CSS Layout Guide</a></li>
          <li><a href='https://www.w3schools.com/cssref/'>W3School's List of CSS Properties</a></li>
          <li><a href='http://caniuse.com/'>Caniuse - Check browser compatility</a></li>
        </ul>
        <h3>Continue Learning: Flexbox</h3>
        <ul>
          <li><a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'>CSS Tricks Flexbox Reference Guide</a></li>
        </ul>

        <h3>Continue Learning: Grid</h3>
        <ul>
          <li><a href='https://gridbyexample.com/'>Grid By Example</a></li>
          <li><a href='https://css-tricks.com/snippets/css/complete-guide-grid/'>CSS Tricks Grid Reference Guide</a></li>
          <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout'>MDN Basic Grid Concepts</a></li>
        </ul>

        <h3>CSS Sandboxes and Games</h3>
          <ul>
          <li><a href='https://ericwindmill.github.io/on-the-grid/'>On the Grid </a>(my own grid sandbox)</li>
          <li><a href='http://cssgridgarden.com/'>Grid Garden</a></li>
          <li><a href='http://flexboxfroggy.com/'>Flexbox Froggy</a></li>
          <li><a href='https://flukeout.github.io/'>CSS Diner</a></li>
        </ul>

        <h3>More From Me</h3>
          <ul>
            <li><a href='http://ericwindmill.com'>ericwindmill.com Resources and Tools Page</a></li>
          </ul>
      </div>
    )
  }
}

export default Resources