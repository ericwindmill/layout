import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Routes_101 from './lessons/101/Routes'

class Main extends Component {
  render () {
    return(
      <main className='MainContent'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/101' component={Routes_101} />
          <Route path='/101/:name' component={Routes_101} />
        </Switch>
      </main>
    )
  }
} 

export default Main