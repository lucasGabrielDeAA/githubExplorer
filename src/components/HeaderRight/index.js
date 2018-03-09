import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const logout = () => {

}

const HeaderRight = () => (
  <TouchableOpacity onPress={() => logout()}>
    <Icon name="exchange" size={16} style={styles.icon} />
  </TouchableOpacity>
);

export default HeaderRight;
