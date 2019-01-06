import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import ReactGA from 'react-ga'

import Navigation from './containers/navigation'
import Footer from './components/footer'

import Page from './containers/page'
import Home from './containers/home'
import Person from './containers/person'
import Project from './containers/project'

import './App.css'
import './styles/main.css'

ReactGA.initialize('UA-121232781-2')
ReactGA.pageview(window.location.pathname + window.location.search)

class App extends Component {
  render () {
    return (
      <div className="App">
        <div>
          <Navigation />          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/people/:person" component={Person} />
            <Route exact path="/research-projects/:project" component={Project} />
            <Route exact path="/:page" render={(props) => (
              <Page slug={props.match.params.page} key={props.match.params.page} />)} />
          </Switch>
          <Footer />
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
