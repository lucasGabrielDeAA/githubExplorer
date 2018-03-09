import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import 'config/ReactotronConfig';

import createNavigator from 'routes';

class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };
  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Github:username');

    this.appLoaded(username);
  }

  appLoaded = (username) => {
    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }
  render() {
    if (!this.state.userChecked) return null;

    const Routes = createNavigator(this.state.userLogged);
    return <Routes />;
  }
}

export default App;
