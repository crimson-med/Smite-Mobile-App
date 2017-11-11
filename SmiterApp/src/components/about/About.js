import React, { Component } from 'react';
import { TouchableOpacity, Text, View, ListView, div } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Moment from 'react-moment';
import EventEmitter from "react-native-md5";
import md5 from "react-native-md5";

const devID = 1987;
const authKey = "F3F77EE5FCDA4169B510AC9C656A";

Object.defineProperty(Date.prototype, 'YYYYMMDDHHMMSS', {
    value: function() {
        function pad2(n) {  // always returns a string
            return (n < 10 ? '0' : '') + n;
        }
        return this.getFullYear() +
               pad2(this.getMonth() + 1) +
               pad2(this.getDate()) +
               pad2(this.getHours()) +
               pad2(this.getMinutes()) +
               pad2(this.getSeconds());
    }
});



function createSignature(){
    var signaturePre = devID + "createsession" + authKey + getTime();
    var final = md5.hex_md5(signaturePre);
    return final;
};

function getTime(){
  var d = new Date(new Date().toUTCString().substr(0, 25));
  var time = d.YYYYMMDDHHMMSS() ;
  return time;
}

class About extends React.Component {
    //Page routing
    goToHome = () => {
        Actions.home()
    }
    //Initiate the state
    state = {
        myState: createSignature()
    }


    state = {
       data: ''
    }
    componentDidMount = () => {
      var req = 'http://api.smitegame.com/smiteapi.svc/createsessionJson/'+devID+'/'+createSignature()+'/'+getTime()
      //var req = 'http://api.smitegame.com/smiteapi.svc/pingJson'
       fetch(req
, {
          method: 'GET'
       })
       .then((response) => response.json())
       .then((responseJson) => {
          console.warn(JSON.stringify(responseJson));

          this.setState({
             data: responseJson
          })
       })
       .catch((error) => {
          console.error(error);
       });
    }

    //Renew the signature
    updateState = () => {
        this.setState({ myState: createSignature() })
    }
    //Renderer for output
    render(){
        return (
            <View>
                <Text onPress = {this.updateState}>
                    {this.state.myState}
                </Text>

                <Text>

                </Text>
                <TouchableOpacity style = {{ margin: 128 }} onPress = {this.goToHome}>
                    <Text>This is ABOUT</Text>
                </TouchableOpacity>
            </View>
        )
    };
}
export default About

function mapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}
