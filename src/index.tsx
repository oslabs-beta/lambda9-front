import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Amplify from 'aws-amplify';
import configuration from './aws-exports';

Amplify.configure(configuration);

ReactDOM.render(<App />, document.getElementById('root'));
