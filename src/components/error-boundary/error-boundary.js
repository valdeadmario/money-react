import React, { Component } from 'react';

import './error-boundary.css';

export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='text-center'>
          <h2>Something went wrong....</h2>
          <h4>Sorry:(</h4>
        </div>
      );
    }

    return this.props.children;
  }
}