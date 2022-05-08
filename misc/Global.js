import React from 'react';
import ReactDOM from 'react-dom';

// this is deprecated in React 18
const testing = React.createElement('h1', {}, 'React Code For CreateElement Component');

ReactDOM.render(testing, document.getElementById('global'));
