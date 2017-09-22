import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Intro_101 from './Intro'
import OneBoxModel from './OneBoxModel'
import TwoSizing from './TwoSizing'
import ThreeBoxSizing from './ThreeBoxSizing'
import FourDisplay from './FourDisplay'
import FiveMarginAuto from './FiveMarginAuto'


class Routes extends Component {
  render () {
    return(
      <Switch>
        <Route exact path='/101/' component={Intro_101} />
        <Route path='/101/box-model' component={OneBoxModel} />
        <Route path='/101/sizing' component={TwoSizing} />
        <Route path='/101/box-sizing' component={ThreeBoxSizing} />
        <Route path='/101/display' component={FourDisplay} />
        <Route path='/101/margin-auto' component={FiveMarginAuto} />
      </Switch>
    )
  }
} 

export default Routes