import React, { Component } from 'react';
import {
  View,
  AsyncStorage,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from 'services/api';

import styles from './styles';

class Organizations extends Component {
  static navigationOptions = {
    title: 'Organizações',
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    const username = await AsyncStorage.getItem('@Github:username');
    const response = await api.get(`/users/${username}/orgs`);

    console.tron.log(response);

    this.setState({
      data: response.data,
      loading: false,
    });
  }

  renderListItem = ({ item }) => {
    console.tron.log(item);
    return null;
  }

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        { this.state.loading ?
          <ActivityIndicator style={styles.loading} />
          : this.renderList()
        }
      </View>
    );
  }
}

export default Organizations;
