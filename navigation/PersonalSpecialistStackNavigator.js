import { createStackNavigator } from 'react-navigation';

import PersonalSpecialistScreen from '../screens/PersonalSpecialistScreen';

const PersonalSpecialistStack = createStackNavigator({
  Home: {
    screen: PersonalSpecialistScreen,
  },
})

export default PersonalSpecialistStack
