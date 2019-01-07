import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPage, fetchProjects } from '../actions/index'

import Container from '../components/container'
import ProjectList from '../components/project-list'

class Projects extends Component {
  componentDidMount () {
    this.props.fetchPage('research-projects')
    this.props.fetchProjects()
  }

  render () {
    let projects = this.props.projects
    if (this.props.limit) {
      projects = projects.slice(0, this.props.limit)
    }
    return (
      <Container>
        <div className="has-text-centered">
          <h1 className="title">{this.props.page.title}</h1>
          {this.props.page.subtitle ? <p className="subtitle">{this.props.page.subtitle}</p> : null}
          <hr />
        </div>
        <ProjectList projects={projects} />
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    page: state.page,
    projects: state.projects
  }
}

export default withRouter(connect(mapStateToProps, { fetchPage, fetchProjects })(Projects))
