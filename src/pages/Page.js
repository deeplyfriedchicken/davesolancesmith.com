import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPage } from '../actions/index'
import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import Container from '../components/container'
import Loading from '../components/loading'

class Page extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    setTimeout(() => {
      if (this.props.slug) {
        this.fetchPage(this.props.slug)
      } else {
        this.fetchPage('home')
      }
    }, 500)
  }

  fetchPage (page) {
    this.props.fetchPage(page).then(() => {
      this.setState({ isLoading: false })
    })
  }

  renderLoading (loading) {
    if (loading) {
      return (
        <div className="has-text-centered loading"><i className="fa-spin fas fa-compass"></i></div>
      )
    }
  }

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
    if (this.state.isLoading) return <Loading loading={this.state.isLoading} />
    return (
      <div className="page-container">
        <Helmet>
          <title>{this.props.page.tab_title}</title>
          <meta name="description" content={this.props.page.description} />
        </Helmet>

        <Hero hero={this.props.page.featured_image} title={this.props.page.title} subtitle={this.props.page.description} />

        <Container>
          <div className="single-content" dangerouslySetInnerHTML={{__html: this.props.page.content}}></div>
        </Container>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps, { fetchPage })(Page)
