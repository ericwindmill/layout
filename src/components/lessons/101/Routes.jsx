import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Intro_101 from './Intro'
import OneDisplay from './OneDisplay'

class Routes extends Component {
  render () {
    return(
      <Switch>
        <Route exact path='/101/' component={Intro_101} />
        <Route path='/101/display' component={OneDisplay} />
      </Switch>
    )
  }
} 

export default Routes