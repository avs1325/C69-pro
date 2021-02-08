import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { StyleSheet, Text} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import ScanScreen from './screens/ScanScreen';

export default class App extends React.Component{
  render() {
    return(
      <AppContainer/>
    )
  }
}
const AppNavigator = createSwitchNavigator({
  ScanScreen: ScanScreen
})

const AppContainer = createAppContainer(AppNavigator)

