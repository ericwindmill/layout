import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Intro_302 from './Intro'
import OneGridTerms from './OneGridTerms'
import TwoDefineAGrid  from './TwoDefineAGrid'

class Routes extends Component {
  render () {
    return(
      <Switch>
        <Route exact path='/302/' component={Intro_302} />
        <Route exact path='/302/grid-terms' component={OneGridTerms} />
        <Route exact path='/302/define-grid' component={TwoDefineAGrid} />

      </Switch>
    )
  }
}

export default Routes