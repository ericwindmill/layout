import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Routes_101 from './lessons/101/Routes'
import Routes_102 from './lessons/102/Routes'
import Routes_201 from './lessons/201/Routes'
import Routes_301 from './lessons/301/Routes'
import Routes_302 from './lessons/302/Routes'
import Resources from './Resources'

class Main extends Component {
  render () {
    return(
      <main className='MainContent'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/101' component={Routes_101} />
          <Route path='/102' component={Routes_102} />
          <Route path='/201' component={Routes_201} />
          <Route path='/301' component={Routes_301} />
          <Route path='/302' component={Routes_302} />
          <Route path='/resources' component={Resources} />
        </Switch>
      </main>
    )
  }
}

export default Main