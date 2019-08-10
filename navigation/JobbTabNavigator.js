import { createBottomTabNavigator } from 'react-navigation';
import JobbUnderStack from './JobbUnderStackNavigator';
import JobbSjukStack from './JobbSjukStackNavigator';
import JobbSpecialistStack from './JobbSpecialistStackNavigator';

const JobbcreateBottomTabNavigator = createBottomTabNavigator({
    JobbUnder: { screen: JobbUnderStack },
    JobbSjuklarare: { screen: JobbSjukStack },
    JobbSpecialistlarare: { screen: JobbSpecialistStack },
  }, { initialRouteName: 'JobbBarnvakt',
       //tabBarComponent: TabBarBottom,
       tabBarPosition: 'bottom',
       tabBarOptions: {
        activeBackgroundColor: '#205081',
        labelStyle: {
          fontSize: 16,
          color: 'white',
          marginTop: -25,
          flex:4,
        },
        tabStyle: {
        },
        style: {
          backgroundColor: '#251626',
        },
      }
  },);

  export default JobbcreateBottomTabNavigator;
