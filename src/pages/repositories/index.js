import React, { Component } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Repositories extends Component {
  static navigationOptions = {
    title: 'Repositórios',
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
  };

  render() {
    return <View />;
  }
}

export default Repositories;
