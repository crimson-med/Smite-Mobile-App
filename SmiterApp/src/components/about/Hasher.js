import React, { Component } from 'react'
import { Alert, AppRegistry, Button, StyleSheet, View,Text } from 'react-native';


const Hasher = (props) => {
   return (
      <View>
         <Text onPress = {props.updateState}>
            {props.myState}
         </Text>
      </View>
   )
}
export default Hasher