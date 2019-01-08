import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPerson } from '../actions/index'
import { Helmet } from 'react-helmet'

import PageLayout from '../containers/PageLayout'
import ProjectList from '../components/project-list'
import Container from '../components/container'

import '../styles/person.css'

class Person extends Component {
    componentDidMount () {
        const person = this.props.match.params.person
        if (person) {
            this.fetchPerson(person)
        }
    }

    fetchPerson(slug) {
        this.props.fetchPerson(slug).then(() => {
        })
    }

    render () {
        const person = this.props.person
        const name = `${person.first_name} ${person.last_name}`
        console.log(person, this.props.match.params.person)
        return (
            <PageLayout>
                { person.first_name ? (
                    <Container>
                        <div id="profile" ref="profile" className="person-container">
                        <Helmet>
                            <title>{`People | ${name}`}</title>
                        </Helmet>
                        <div className="person-info has-text-centered">
                            <img className="profile-picture" src={person.profile_picture} alt={name} />
                            <h1 id="name" className="title name">{name}</h1>
                            <p>{person.affiliation}</p>
                            <p>{`${person.college} ${person.graduation_year}`}</p>
                        </div>
                        <div className="single-content" dangerouslySetInnerHTML={{__html: person.biography}}></div>
                        { person.projects.length ? (
                            <div className="collection">
                            <h1 className="is-size-4 title">Projects</h1>
                            <ProjectList projects={person.projects} />
                            </div>
                        ) : null }
                        </div>
                    </Container>
                ) : null }
            </PageLayout>
        )
    }
}

function mapStateToProps (state) {
  return {
    person: state.person
  }
}

export default withRouter(connect(mapStateToProps, { fetchPerson })(Person))
