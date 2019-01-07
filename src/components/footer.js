import React, { Component } from 'react'

import '../styles/footer.css'

class Footer extends Component {
  render () {
    return (
      <div className="hero-foot">
        <div className="container has-text-centered">
          <hr/>
          <div className="has-text-centered is-centered">
            <a href="https://buttercms.com/" target="_blank" rel="noopener noreferrer">
              <img className="buttercms" alt="buttercms attribution logo" src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" />
            </a>
          </div>
          <span className="icon">
            <i className="fab fa-github"></i>
          </span>
          <p>engineered by <a href="https://github.com/kcunanan/davesolancesmith.com" target="_blank" rel="noopener noreferrer">kcunanan</a></p>
        </div>
      </div>
    )
  }
}

export default Footer
