import React, { PureComponent } from 'react';

export default class Search extends PureComponent {
  render() {
    return (
      <div>
        <h1>Genre Search Component</h1>
        <input type="text" />
        <button>Search</button>
      </div>
    );
  }
}
