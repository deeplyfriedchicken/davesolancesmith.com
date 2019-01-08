import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import routes from '../routes/routes'
import Page from '../pages/Page'

import './Transition.css'

const RouterNode = () => (
    <Route
        render={({ location }) => (
            <TransitionGroup className="route-container">
                <CSSTransition
                    key={location.key}
                    appear={true}
                    classNames="fade"
                    timeout={600}
                >
                    <div>
                        <Switch location={location}>
                            {routes.map(route => <Route exact path={route.path} component={route.component} name={route.name} key={route.name} />)}
                            <Route exact path="/:page" render={(props) => (
                                <Page slug={props.match.params.page} key={props.match.params.page} />)} />
                            <Route render={(() => <div>No page found</div>)} />
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        )}
    />
)

export default RouterNode
