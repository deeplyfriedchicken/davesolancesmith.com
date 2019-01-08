import React, { Component } from 'react'

import reactLogo from '../assets/react-logo.png';
import '../styles/footer.css'

class Footer extends Component {
  render () {
    return (
      <div className="hero-foot">
        <div className="container has-text-centered">
          <div className="has-text-centered is-centered">
            <img href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="react-logo" src={reactLogo} alt="react logo" />
            <a href="https://buttercms.com/" target="_blank" rel="noopener noreferrer">
              <img className="buttercms-logo" alt="buttercms attribution logo" src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo" />
            </a>
          </div>
          <p className="copyright">© Dave Smith | Designed by <a href="https://github.com/kcunanan/davesolancesmith.com" target="_blank" rel="noopener noreferrer">Kevin Cunanan <span className="icon"><i className="fab fa-github"></i></span></a></p>
        </div>
      </div>
    )
  }
}

export default Footer
