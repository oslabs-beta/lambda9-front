import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Amplify from 'aws-amplify';
import configuration from './aws-exports.js';

Amplify.configure(configuration);

ReactDOM.render(<App />, document.getElementById('root'));
