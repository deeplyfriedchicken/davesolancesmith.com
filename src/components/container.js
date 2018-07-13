import React, { Component } from 'react'

class Container extends Component {
  render () {
    return (
      <div>
        <div className="container ">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10 is-centered">
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Container