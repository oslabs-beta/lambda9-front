import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import Amplify from "aws-amplify";
import configuration from "./aws-exports.js";
import appSyncConfiguration from "./aws-appsync-config.js";
console.log(appSyncConfiguration)

Amplify.configure({ ...configuration, ...appSyncConfiguration });

ReactDOM.render(<App />, document.getElementById("root"));
