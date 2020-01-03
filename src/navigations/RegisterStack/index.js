import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UserType from '~/pages/Register/UserType';
import RegisterPlayer from '~/pages/Register/RegisterPlayer';
import RegisterTeam from '~/pages/Register/RegisterTeam';

const RegisterStack = createStackNavigator(
  {
    UserType: {
      screen: UserType,
      navigationOptions: {
        header: null,
      },
    },
    RegisterPlayer: {
      screen: RegisterPlayer,
    },
    RegisterTeam: {
      screen: RegisterTeam,
    },
  },
  {
    initialRouteName: 'UserType',
  }
);

export default createAppContainer(RegisterStack);
