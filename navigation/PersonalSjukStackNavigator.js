import { createStackNavigator } from 'react-navigation';

import PersonalSjukScreen from '../screens/PersonalSjukScreen';

const PersonalSjukStack = createStackNavigator({
  Home: {
    screen: PersonalSjukScreen,
  },
})

export default PersonalSjukStack
