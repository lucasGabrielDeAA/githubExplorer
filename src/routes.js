import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { metrics, colors } from 'styles';

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
    }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.white,
        inactiveTintColor: colors.whiteTransparent,
        style: {
          backgroundColor: colors.secundary,
        },
        indicatorStyle: {
          backgroundColor: colors.white,
        },
      },
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
