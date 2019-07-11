import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { withAuthenticator } from "aws-amplify-react";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavContainer from "./components/NavContainer";
import AppContainer from "./components/AppContainer";
import AllFunctionsContainer from "./components/AllFunctions/AllFunctionsContainer";
import MyFuncContainer from "./components/MyFunctions/MyFuncContainer";
import Bottom from "./components/Bottom";
import { AppContextInterface } from "./@types/types";
// import Bottom from './components/Bottom';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: helvetica, Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, ul, li {
    margin: 0;
  }
`;

const funcs = [
  {
    functionName: "hello",
    lastModified: new Date("12/06/2009"),
    invocation: 2,
    error: 2,
    project: "We"
  },
  {
    functionName: "helloasync",
    lastModified: new Date("12/06/2008"),
    invocation: 3,
    error: 3,
    project: "are"
  },
  {
    functionName: "helloworld",
    lastModified: new Date("12/06/2001"),
    invocation: 6,
    error: 1,
    project: "Axolotle"
  }
];

export const MyContext = React.createContext<AppContextInterface | null>(null);

class MyProvider extends Component {
  state = {
    user: {
      username: "Tang",
      avatar: "./src/logos/lamb.jpg"
    },
    functions: funcs
  };
  render() {
    return (
      <MyContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const App: React.FunctionComponent<{}> = (props: any) => {
  return (
    <Router>
      <MyProvider>
        <GlobalStyle />
        <NavContainer />
        <Switch>
          <Route path='/' exact component={AppContainer} />
          <Route path='/functions' exact component={AllFunctionsContainer} />
          <Route path='/functions/:func' component={MyFuncContainer} />
        </Switch>
        <Bottom />
      </MyProvider>
    </Router>
  );
};

export default withAuthenticator(App);
// export default App;
