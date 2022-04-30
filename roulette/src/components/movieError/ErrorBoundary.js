import React from 'react';
import MovieError from './MovieError';

/**
 * Error Boundary to route to error component when error occurs in the child component.
 */
class ErrorBoundary extends React.Component {
  state = { error: null };

  /**
   * Adds two numbers together.
   * @param {object} error The error object.
   * @return {object} The error object.
   */
  static getDerivedStateFromError(error) {
    return { error };
  }

  /**
   * Adds two numbers together.
   * @return {any} The error component or the continue to the right component.
   */
  render() {
    const { error } = this.state;
    if (error) {
      return <MovieError error={error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
