import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchPage } from '../actions/index'

import Container from '../components/container'
import Hero from '../components/hero'

import '../styles/publication.css'

class Publications extends Component {
  componentDidMount () {
    this.props.fetchPage('publications')
  }

  renderPublications () {
    // let publications = this.props.publications
    console.log(this.props.page.featured_image)
    // if (this.props.limit) {
    //   publications = publications.slice(0, this.props.limit)
    // }
    // return publications.map((publication, i) => {
    //   return (
    //     <div key={i} className="publication" dangerouslySetInnerHTML={{__html: publication.citation}}></div>
    //   )
    // })
  }

  render () {
    return (
      <Container>
        <Helmet>
          <title>{this.props.page.tab_title}</title>
          <meta name="description" content={this.props.page.description} />
        </Helmet>
        {this.props.page.featured_image ? (
          <Hero hero={this.props.page.featured_image} title={this.props.page.title} subtitle={this.props.page.description} />
        ) : (
          <div className="has-text-centered">
            <h1 className="title">{this.props.page.title}</h1>
            {this.props.page.subtitle ? <p className="subtitle">{this.props.page.subtitle}</p> : null}
            <hr />
          </div>
        )}

        <div className="single-content" dangerouslySetInnerHTML={{__html: this.props.page.content}}></div>
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    page: state.page
  }
}

export default withRouter(connect(mapStateToProps, { fetchPage })(Publications))
