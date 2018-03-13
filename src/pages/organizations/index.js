import React, { Component } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Organizations extends Component {
  static navigationOptions = {
    title: 'Organizações',
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />,
  };

  render() {
    return <View />;
  }
}

export default Organizations;
