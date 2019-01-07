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
                { this.props.title !== "" ? (
                  <h1 class="title">
                    { this.props.title }
                  </h1>
                ) : null}
                <div>
                  { this.props.subtitle !== "" ? (
                    <h1 class="title">
                      { this.props.subtitle }
                    </h1>
                  ) : null}
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
