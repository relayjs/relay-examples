import React from 'react';

export default class ErrorBoundary extends React.Component {
  componentDidCatch(error) {
    if (!this.props.shouldCatchError || this.props.shouldCatchError(error)) {
      this.setState({error});
    }
  }

  render() {
    if (this.state && this.state.error) {
      return this.props.renderError(this.state.error, this._resetError);
    }
    return this.props.children;
  }

  _resetError = () => {
    this.setState({error: null});
  };
}
