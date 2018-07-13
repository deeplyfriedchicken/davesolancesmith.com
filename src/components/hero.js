import React, { Component } from 'react'

import '../styles/hero.css'

class Hero extends Component {
  render () {
    console.log(this.props)
    if (this.props.hero) {
      return (
        <div>
          <section
            class="hero is-info is-medium is-bold"
            style={{backgroundImage: `url(${this.props.hero})` }}>
            <div class="hero-body">
              <div class="container has-text-centered">
                <h1 class="title">
                  { this.props.title }
                </h1>
                <div>
                  <h2 class="subtitle">
                    { this.props.subtitle }
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }
    return <div></div>
  }
}

export default Hero
