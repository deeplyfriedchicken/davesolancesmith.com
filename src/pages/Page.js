import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPage } from '../actions/index'
import { Helmet } from 'react-helmet'

import PageLayout from '../containers/PageLayout'
import Hero from '../components/hero'
import Container from '../components/container'

class Page extends Component {
  renderTitle () {
    if (this.props.page.title !== "") {
      return <h1 className="title">{this.props.page.title}</h1>
    }
  }

  renderSubtitle () {
    if (this.props.page.description !== "") {
      return <h2 className="subtitle">{this.props.page.description}</h2>
    }
  }

  render () {
    return (
        <PageLayout page={this.props.slug}>
            <Helmet>
                <title>{this.props.page.tab_title}</title>
                <meta name="description" content={this.props.page.description} />
            </Helmet>

            <Hero hero={this.props.page.featured_image} title={this.props.page.title} subtitle={this.props.page.description} />

            <Container>
                <div className="single-content" dangerouslySetInnerHTML={{__html: this.props.page.content}}></div>
            </Container>
        </PageLayout>
    )
  }
}

function mapStateToProps (state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps, { fetchPage })(Page)
