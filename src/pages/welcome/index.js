import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import Proptypes from 'prop-types';
import {
  StatusBar,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import api from 'services/api';

import styles from './styles';

export default class Welcome extends Component {
    static navigationOptions = {
      header: null,
    };

    static propTypes = {
      navigation: Proptypes.shape({
        dispatch: Proptypes.func,
      }).isRequired,
    };

    state = {
      username: '',
      loading: false,
      errorMessage: null,
    };

    checkUserExists = async (username) => {
      const user = await api.get(`/users/${username}`);

      return user;
    }

    singIn = async () => {
      const { username } = this.state;

      if (!username.length === 0) return;

      this.setState({ loading: true });
      try {
        await this.checkUserExists(username);

        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'User' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      } catch (error) {
        this.setState({ loading: false, errorMessage: 'Usuário não existe' });
      }
    }
    render() {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.title}>Bem vindo</Text>
          <Text style={styles.text}>
            Para continuar, é necessário que você informe seu usuário no GitHub
          </Text>

          { !!this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text> }

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite seu usuário"
              underlineColorAndroid="transparent"
              value={this.state.username}
              onChangeText={ username => this.setState({ username })}
            />

            <TouchableOpacity style={styles.button} onPress={this.singIn}>
              {this.state.loading ?
                <ActivityIndicator size="small" color="#FFFFFF" />
              :
                <Text style={styles.buttonText}>Continuar</Text>
              }
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}
