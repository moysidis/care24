import { createStackNavigator } from 'react-navigation';

import JobbSjukScreen from '../screens/JobbSjukScreen';

const JobbSjukStack = createStackNavigator({
  Home: {
    screen: JobbSjukScreen,
  },
})

export default JobbSjukStack
