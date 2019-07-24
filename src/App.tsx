import React, { useState, useReducer, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { withAuthenticator } from "aws-amplify-react";
import "antd/dist/antd.css";
import { API, graphqlOperation, Auth } from "aws-amplify";
import {
  GetUser,
  ListFunctions,
  SubscribeToNewFunctions
} from "./graphql/graphql";
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

const avatarReducer = (state, action) => {
  switch (action.type) {
    case "UPLOAD":
      // console.log('this is payload', action.avatar)
      return action.img;
  }
};

const MyProvider: React.FunctionComponent<{}> = props => {
  const [user, setUser] = useState({});
  const [functions, setFunctions] = useState([]);
  const [img, dispatch] = useReducer(avatarReducer, "./src/logos/download.jpeg");

  // didMount
  useEffect(() => {
    async function getData() {
      try {
        const user = await Auth.currentAuthenticatedUser({
          bypassCache: false
        });

        const userData = await API.graphql(
          graphqlOperation(GetUser, { id: user.attributes.sub })
        ).then(response => {
          const data = response.data.getUser;
          console.log('❎data', response)
          return data;
        });

        API.graphql(graphqlOperation(ListFunctions)).then(response => {
          const data = response.data.listFunctions.items;
          // console.log('data', data);
          setFunctions(data);
          setUser({
            username: userData.username,
            email: userData.email,
            phone: userData.phone
          });
          dispatch({type: 'UPLOAD', img: userData.profileImageUrl})
          console.log("this is userData", state.user);
        });
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, []);

  //didUpdate
  useEffect(() => {
    API.graphql(graphqlOperation(SubscribeToNewFunctions)).subscribe({
      next: response => {
        console.log("response: ", response);
        const func = response.value.data.onCreateFunction;
        console.log("func: ", func);
        setFunctions([...functions, func]);
      }
    });
  });

  const state = {
    user,
    avatar: img,
    functions
  };

  console.log(state);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MyContext.Provider>
  );
};

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
    color: dodgerblue;
    margin: 0;
    font-family: helvetica, Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, ul, li {
    margin: 0;
    color: dodgerblue;
  }
`;

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default withAuthenticator(App);
// export default App;
