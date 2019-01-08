import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import ReactGA from 'react-ga'

import RouterNode from './containers/RouterNode'

import ScrollToTop from './components/ScrollToTop'
import Navigation from './containers/navigation'
import Footer from './components/footer'

import './App.css'
import './styles/main.css'

ReactGA.initialize('UA-121232781-2')
ReactGA.pageview(window.location.pathname + window.location.search)

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
            <ScrollToTop>
                <div className="layout">
                        <Navigation />
                        <RouterNode />
                        <Footer />
                </div>
            </ScrollToTop>
        </BrowserRouter>
      </div>
    )
  }
}

export default hot(module)(App)
