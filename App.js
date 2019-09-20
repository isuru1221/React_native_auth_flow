/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//.env
import { FIREBASE_API_KEY } from 'react-native-dotenv'

//firebase
import {conf} from './src/firebaseConfig'


//Navigation
import Navigator from './src/Navigation/SwitchNavigator'


const App = () => {
  return (
     <Navigator/>
  );
};

const styles = StyleSheet.create({

});



export default App;
