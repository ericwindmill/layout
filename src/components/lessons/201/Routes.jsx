import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Intro_201 from './Intro'
import OneFloat from './OneFloat'
import TwoClear from './TwoClear'
import ThreeClearFix from './ThreeClearFix'


class Routes extends Component {
  render () {
    return(
      <Switch>
        <Route exact path='/201/' component={Intro_201} />
        <Route exact path='/201/float' component={OneFloat} />
        <Route exact path='/201/clear' component={TwoClear} />
        <Route exact path='/201/clearfix' component={ThreeClearFix} />
      </Switch>
    )
  }
} 

export default Routes