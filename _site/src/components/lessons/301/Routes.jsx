import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Intro_301 from './Intro'
import OneDisplayFlex from './OneDisplayFlex'
import TwoFlexDirection from './TwoFlexDirection'
import ThreeFlexWrap from './ThreeFlexWrap'
import FourFlexFlow from './FourFlexFlow'
import FiveFlexTerms from './FiveFlexTerms'


class Routes extends Component {
  render () {
    return(
      <Switch>
        <Route exact path='/301/' component={Intro_301} />
        <Route exact path='/301/display-flex' component={OneDisplayFlex} />
        <Route exact path='/301/flex-direction' component={TwoFlexDirection} />
        <Route exact path='/301/flex-wrap' component={ThreeFlexWrap} />
        <Route exact path='/301/flex-flow' component={FourFlexFlow} />
        <Route exact path='/301/flex-terms' component={FiveFlexTerms} />
      </Switch>
    )
  }
}

export default Routes