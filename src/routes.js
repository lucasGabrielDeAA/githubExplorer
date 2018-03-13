import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { metrics } from 'styles';

// Pages
import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Orgaizations from 'pages/organizations';

// Components
import HeaderRight from 'components/HeaderRight';

const createNavigator = (isLogged = false) => StackNavigator({
  Welcome: { screen: Welcome },
  User: {
    screen: TabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Orgaizations },
    }),
  },
}, {
  initialRouteName: isLogged ? 'User' : 'Welcome',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      paddingHorizontal: metrics.basePadding,
    },
    headerRight: <HeaderRight navigation={navigation} />,
  }),
});

export default createNavigator;
