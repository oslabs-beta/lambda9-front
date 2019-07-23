import React, { Component, useReducer, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { withAuthenticator } from "aws-amplify-react";
import "antd/dist/antd.css";
import { API, graphqlOperation } from "aws-amplify";
import { ListFunctions, SubscribeToNewFunctions } from "./graphql/graphql";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import AllFunctionsContainer from "./components/AllFunctions/AllFunctionsContainer";
import MyFuncContainer from "./components/MyFuncContainer";
import Bottom from "./components/Bottom";
import NavContainer from "./components/NavContainer";
import Profile from "./components/UserPopover/Profile";
import Setting from "./components/UserPopover/Setting";
import styled from "styled-components";

export const MyContext = React.createContext<any | null>(null);

class MyProvider extends Component {
  state = {
    user: {
      username: "Bruce",
      imageUrl: "./src/logos/download.jpeg"
    },
    functions: []
  };

  // loadingReducer(state, action) {
  //   switch(action.type){
  //     case 'UPLOAD':
  //       return state = true;
  //   }
  // }

  // dispatch({type: 'UPLOAD'})

  // const [loading, dispatch] = useReducer(loadingReducuer, false)

  componentDidMount() {
    API.graphql(graphqlOperation(ListFunctions))
      .then(response => {
        const data = response.data.listFunctions.items;
        console.log(data);
        this.setState({ functions: data });
      })
      .catch(err => console.log(err));
  }
  // useEffect(()=> {
  //   API.graphql(graphqlOperation(ListFunctions))
  //       .then(response => {
  //         const data = response.data.listFunctions.items;
  //         console.log(data);
  //         this.setState({ functions: data });
  //       })
  //       .catch(err => console.log(err));
  // },[])

  // useEffect(()=>{
  //   API.graphql(graphqlOperation(SubscribeToNewFunctions)).subscribe({
  //     next: response => {
  //       console.log("response: ", response);
  //       const func = response.value.data.onCreateFunction;
  //       console.log("func: ", func);
  //       this.setState({ functions: [...this.state.functions, func] });
  //     }
  //   });
  // })
  componentDidUpdate() {
    API.graphql(graphqlOperation(SubscribeToNewFunctions)).subscribe({
      next: response => {
        console.log("response: ", response);
        const func = response.value.data.onCreateFunction;
        console.log("func: ", func);
        this.setState({ functions: [...this.state.functions, func] });
      }
    });
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
        <AppStyled>
          <NavContainer />
          <Switch>
            <Route path='/' exact component={AppContainer} />
            <Route path='/functions' exact component={AllFunctionsContainer} />
            <Route path='/functions/:func' component={MyFuncContainer} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/setting' exact component={Setting} />
          </Switch>
          <Bottom />
        </AppStyled>
      </MyProvider>
    </Router>
  );
};

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

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default withAuthenticator(App);
// export default App;
