import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import Amplify from "aws-amplify";
import configuration from "./aws-exports.js";
import appSyncConfiguration from "./aws-appsync-config.js";

Amplify.configure({
  ...configuration,
  ...appSyncConfiguration,
  Auth: {
    identityPoolId: "us-east-1:59c956fb-7dff-4bd7-b370-9b3a36596a09", //REQUIRED - Amazon Cognito Identity Pool ID
    region: "US_EAST_1"
  },
  Storage: {
    AWSS3: {
      bucket: "airfn-user-profile"
    }
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
