import { createStackNavigator } from 'react-navigation';

import JobbSpecialistScreen from '../screens/JobbSpecialistScreen';

const JobbSpecialistStack = createStackNavigator({
  Home: {
    screen: JobbSpecialistScreen,
  },
})

export default JobbSpecialistStack
