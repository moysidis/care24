import React from 'react';
import {

  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  WebView,
} from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

export default class JobbBarnvaktScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canGoBack: false
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'För jobbsökande',
      headerLeft: (
        <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={35} color="#483148" />
        </TouchableOpacity>),
      headerRight: (
        <TouchableOpacity style={{ marginRight: 15 }} onPress = {() => navigation.state.params.handleBack()}>
            <Entypo name="back" size={40} color="#483148" />
          </TouchableOpacity>
        )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ handleBack: this.onBack });
  }

  render() {
    let cssCode = `
        document.querySelector('.header').style.display = 'none';
    `;
    return (
    <View style={ { flex: 1 } }>
        <StatusBar
            hidden={false}
        />
        {/* this.state.canGoBack &&
        <View style={styles.topbar}>
        <TouchableOpacity
          disabled={!this.state.canGoBack}
          onPress={this.onBack}
          >
          <Feather name="chevron-left" size={20} color="#483148" />
        </TouchableOpacity>
        </View>
        */ }
        <WebView
                 ref={refForBack => { this.referencedWebview = refForBack; }}
                 style={{ flex:1 }}
                 automaticallyAdjustContentInsets={ false }
                 source={ { uri: 'https://www.care24.se/jobb-vard' } }
                 javaScriptEnabled={ true }
                 domStorageEnabled={ true }
                 scrollEnabled={ true }
                 decelerationRate="normal"
                 userAgent="MobileApp"
                 startInLoadingState={ true }
                 onNavigationStateChange={this._onNavigationStateChange}
                 injectedJavaScript={cssCode}
                 geolocationEnabled={ true }
         />
    </View>
    );
  }
  _onNavigationStateChange = (webViewState) => { // you can also use navState
      this.setState({
        canGoBack: webViewState.canGoBack
      })
    }

  onBack = () => {
    this.referencedWebview.goBack();
  }
}

const styles = StyleSheet.create({
  topbar: {
    top: 2,
    left: 5,
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'lightblue',
    borderRadius:5,
    opacity: 0.7,
  },
});
