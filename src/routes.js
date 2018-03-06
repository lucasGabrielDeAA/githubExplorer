import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Orgaizations from 'pages/organizations';

const Routes = StackNavigator({
  Welcome: { screen: Welcome },
  User: {
    screen: TabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Orgaizations },
    }),
  },
}, {
  initialRouteName: 'Welcome',
});

export default Routes;
