import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/index'

import PageLayout from '../containers/PageLayout'
import Container from '../components/container'
import ProjectList from '../components/project-list'

class Projects extends Component {
  componentDidMount () {
    this.props.fetchProjects()
  }

  render () {
    let projects = this.props.projects
    if (this.props.limit) {
      projects = projects.slice(0, this.props.limit)
    }
    return (
        <PageLayout page="research-projects">
            <Container>
                <div className="has-text-centered">
                    <h1 className="title">{this.props.page.title}</h1>
                    {this.props.page.subtitle ? <p className="subtitle">{this.props.page.subtitle}</p> : null}
                    <hr />
                </div>
                <ProjectList projects={projects} />
            </Container>
        </PageLayout>
    )
  }
}

function mapStateToProps (state) {
  return {
    page: state.page,
    projects: state.projects
  }
}

export default withRouter(connect(mapStateToProps, { fetchProjects })(Projects))
