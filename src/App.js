import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import ReactGA from 'react-ga'

import routes from './routes/routes'
import Page from './pages/Page'

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
        <div>
          <Navigation />          
          <Switch>
            {routes.map(route => <Route exact path={route.path} component={route.component} name={route.name} key={route.name} />)}
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
