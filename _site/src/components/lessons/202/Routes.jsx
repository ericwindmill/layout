import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Intro_202 from './Intro'
import OneHTML from './OneHTML'
import TwoCSS from './TwoCSS'
import ThreeUseCase from './ThreeUseCase'


class Routes extends Component {
  render () {
    return(
      <Switch>
        <Route exact path='/202/' component={Intro_202} />
        <Route exact path='/202/html-table' component={OneHTML} />
        <Route exact path='/202/css-table' component={TwoCSS} />
        <Route exact path='/202/table-uses' component={ThreeUseCase} />
      </Switch>
    )
  }
} 

export default Routes