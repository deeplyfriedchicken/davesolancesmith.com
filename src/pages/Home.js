import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import Announcements from './Announcements'

import PageLayout from '../containers/PageLayout'
import Container from './../components/container'

import '../styles/home.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = { loading: true }
    }

  renderSlides () {
    if (this.props.home.slides) {
      const slide = this.props.home.slides[0]
        return (
          <div key={slide.title}>
            <div id="home-hero" className="hero is-info is-medium is-bold" style={{backgroundImage: `url(${slide.image})` }}>
              <div className="hero-body">
                <div className="has-text-centered">
                  <div>
                    <h1 className="title">{slide.title}</h1>
                  </div>
                  <div>
                    <h2 className="subtitle">{slide.subtitle}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  render () {
    const home = this.props.home

    return (
      <PageLayout page="home" noContainer>
        <Helmet>
          <title>{home.tab_title}</title>
          <meta name="description" content={home.description} />
        </Helmet>

        {this.renderSlides()}

        <Container>
            <div className="single-content" dangerouslySetInnerHTML={{__html: this.props.home.content}}></div>
            <Announcements limit={home.annoucnement_limit} />
        </Container>
      </PageLayout>
    )
  }
}

function mapStateToProps (state) {
  return {
    home: state.page
  }
}

export default connect(mapStateToProps)(Home)
