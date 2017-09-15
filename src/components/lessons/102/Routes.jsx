import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Intro_102 from './Intro'
import OneAbsoluteVsFixed from './OneAbsoluteVsFixed'
import TwoPositionSticky from './TwoPositionSticky'

class Routes extends Component {
  render () {
    return(
      <Switch>
        <Route exact path='/102/' component={Intro_102} />
        <Route path='/102/absolute-or-fixed' component={OneAbsoluteVsFixed} />
        <Route path='/102/position-sticky' component={TwoPositionSticky} />
      </Switch>
    )
  }
} 

export default Routes