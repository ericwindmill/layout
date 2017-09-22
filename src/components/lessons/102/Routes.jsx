import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Intro_102 from './Intro'
import OneDocumentFlow from './OneDocumentFlow'
import TwoPositionSticky from './TwoPositionSticky'

class Routes extends Component {
  render () {
    return(
      <Switch>
        <Route exact path='/102/' component={Intro_102} />
        <Route path='/102/document-flow' component={OneDocumentFlow} />
        <Route path='/102/position-sticky' component={TwoPositionSticky} />
      </Switch>
    )
  }
} 

export default Routes