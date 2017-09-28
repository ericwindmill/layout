import React, { Component } from 'react'

import Main from './components/Main'
import Sidebar from './components/SidebarNav'
import Header from './components/Header'
import Footer from './components/Footer'



class App extends Component {
  render () {
    return (
        <main className='App'>
          <Header />
          <Sidebar />
          <Main  />
          <Footer />
        </main>
    )
  }
}

export default App
