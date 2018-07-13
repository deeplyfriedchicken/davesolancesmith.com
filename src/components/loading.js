import React, { Component } from 'react'

import '../styles/loading.css'

class Loading extends Component {
  render () {
    if (this.props.loading) return <div className="has-text-centered loading"><i className="fa-spin fas fa-compass"></i></div>
    return <div></div>
  }
}

export default Loading
