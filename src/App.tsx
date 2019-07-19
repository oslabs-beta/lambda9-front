import React, { Component, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { withAuthenticator } from "aws-amplify-react";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppContainer from "./components/AppContainer";
import AllFunctionsContainer from "./components/AllFunctions/AllFunctionsContainer";
import MyFuncContainer from "./components/MyFuncContainer";
import Bottom from "./components/Bottom";
import NavContainer from "./components/NavContainer";

import { AppContextInterface } from "./@types/types";
import { UserData } from "amazon-cognito-identity-js";

import axios from "axios";
import styled from "styled-components";

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

interface Func {
  functionName: string;
  lastModified: Date;
  invocations: number;
  error: number;
  project: string;
}

interface User {
  username: string;
  avatar: string;
}

interface FuncState {
  user: User;
  functions: Func[];
  data: any;
}

export const MyContext = React.createContext<any | null>(null);

class MyProvider extends Component {
  state = {
    user: {
      username: "Bruce",
      avatar: "./src/logos/lamb.jpg"
    },
    functions: funcs,
    data: []
  };

  getAllData() {
    axios
      .get("https://test.lambda9.cloud/backend-test/alldata")
      .then(res => this.setState({ ...this.state, data: res.data }))
      .catch(err => console.log(err));
  }

  getUserData() {
    axios
      .post(
        "https://test.lambda9.cloud/backend-test/getUserFunctions",
        this.state.user.username
      )
      .then(res => this.setState({ ...this.state, functions: res.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getAllData();
    // this.getUserData()
  }

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
