import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPage } from '../actions/index'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = { loading: true }
    }

    componentDidMount () {
        setTimeout(() => {
            this.fetchPage(this.props.page)
        }, 500)
    }

    fetchPage (page) {
        this.props.fetchPage(page).then(() => {
            this.setState({ loading: false })
        })
    }

  render () {
    return (
      <div className={`page-container ${this.state.loading ? 'loading' : 'loaded'}`}>
        {this.props.children}
      </div>
    )
  }
}

export default connect(null, { fetchPage })(Home)
