import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// APP NAVIGATIONS
import PlayerStack from '~/navigations/PlayerStack';
// AUTH NAVIGATIONS
import AuthStack from '~/navigations/AuthStack';
// AUTH NAVIGATIONS
import AuthLoading from '~/navigations/LoadingScreen';

// SWITCH DE ROTAS PRIMÁRIAS
const Routes = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      AuthStack,
      PlayerStack,
      // TeamStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default createAppContainer(Routes);
