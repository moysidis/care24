import { createStackNavigator } from 'react-navigation';

import JobbUnderScreen from '../screens/JobbUnderScreen';

const JobbUnderStack = createStackNavigator({
  Home: {
    screen: JobbUnderScreen,
  },
})

export default JobbUnderStack
