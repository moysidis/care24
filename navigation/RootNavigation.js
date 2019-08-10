import { Notifications } from 'expo';
import React from 'react';
import { createDrawerNavigator, NavigationActions } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SideMenu from '../components/SideMenu';

import HomeScreen from '../screens/HomeScreen';
import PersonalBottomTabNavigator from './PersonalTabNavigator';
import JobbUnderStack from './JobbUnderStackNavigator';
//import JobbcreateBottomTabNavigator from './JobbcreateBottomTabNavigator';
import RegistreraBottomTabNavigator from './RegistreraTabNavigator';
import MittKontoStack from './MittKontoStackNavigator';
import ForfraganStack from './ForfraganStackNavigator';
import PersonalSokStack from './PersonalSokStackNavigator';
import KontaktaStack from './KontaktaStackNavigator';

import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = createDrawerNavigator(
  {
    HomeCare24: {
      screen: HomeScreen,
    },
    Account: {
      screen: MittKontoStack,
    },
    Request: {
      screen: ForfraganStack,
    },
    Personel: {
      screen: PersonalBottomTabNavigator,
    },
    Searching: {
      screen: PersonalSokStack,
    },
    Job: {
      screen: JobbUnderStack,
    },
    Register: {
      screen: RegistreraBottomTabNavigator,
    },
    Contact: {
      screen: KontaktaStack,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),

    //drawerBackgroundColor : 'pink',
    contentComponent: SideMenu,
    drawerWidth: 300,
    contentOptions: {
     style: {
      backgroundColor: 'red',
      flex: 1
     }
    },
  },
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
    if (!global.registered && this.props.screenProps!==''){
      this.navigateToMyAccount();
    }
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  navigateToMyAccount = () => {
    if (!global.registered){
        this.navigator && this.navigator.dispatch(
          NavigationActions.navigate({ 
            routeName:'Account', 
            params: {},
            action: NavigationActions.navigate({ routeName: 'MyAccount' }), 
          })
        );
    }
  }

  render() {
    return(
          <RootStackNavigator
            ref={nav => { this.navigator = nav; }}
            style={{backgroundColor: '#c3abd3'}}
            screenProps = {this.props.screenProps} // forward screenProps with deeplink path
            // navigation = {this.props.navigation} //pass the navigation component to the next navigator screen
          />
    );
  }


  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
