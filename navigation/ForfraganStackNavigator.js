import { createStackNavigator } from 'react-navigation';

import ForfraganScreen from '../screens/ForfraganScreen';

const ForfraganStack = createStackNavigator({
  MyAcount: {
    screen: ForfraganScreen,
  },
})

export default ForfraganStack
