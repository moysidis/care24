import { createStackNavigator } from 'react-navigation';

import PersonalUnderScreen from '../screens/PersonalUnderScreen';

const PersonalUnderStack = createStackNavigator({
  Home: {
    screen: PersonalUnderScreen,
  },
})

export default PersonalUnderStack;
