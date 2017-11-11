/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Routes from './src/components/routes/Routes.js'

class SmiterApp extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default SmiterApp
