import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppState } from './store/rootStore'

import { login, notlogin } from './store/login/loginAction'

interface AppProps {
  userlogin: () => void;
  usernotlogin: () => void;
}

const mapStateToPropes = (state: AppState) => ({
  login: state.loginReduser.login
})

const mapDispatchToPropes = (dispatch: Dispatch): AppProps => ({
  userlogin: () => dispatch(login()),
  usernotlogin: () => dispatch(notlogin())
})

class App extends React.Component<AppProps, AppState>{
  render(): JSX.Element {
    return (
      <Homepage {...this.props}></Homepage>
    );
  }
}

export default connect(mapStateToPropes, mapDispatchToPropes)(App);
