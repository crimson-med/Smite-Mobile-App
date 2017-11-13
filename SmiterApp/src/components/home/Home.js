import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const s_home = require("../../styles/s_home.js");

export const ENTRIES1 = [
    {
        mainData: "zest_points",
        highlightedText: "Zest points won",
        normalText: "since registration",
        colorScheme: "#fff"
    },
    {
        mainData: "activated_boosts_count",
        highlightedText: "Boost",
        normalText: "activated",
        colorScheme: "#0065fe"
    },
    {
        mainData: "total_reward",
        highlightedText: "Rewards",
        normalText: "redeemed",
        colorScheme: "#fcbe00"
    },
];

function test(){
  for (i=0; i< ENTRIES1.length;i++){
    var temp = ENTRIES1[i].mainData
    console.warn(temp)
    //return(<Text>{temp}</Text>)
  }
}

const goToAbout = () => {
   Actions.about()
}

export default class Home extends React.Component {



   render() {

     contents = ENTRIES1.map(function (item) {
        return (
          <View key={item.mainData} style={s_home.test }>
            <Text>{item.mainData}</Text>
          </View>
        );
     });
     return (
      <View>
        <View>
        <Text style={{textAlign:"center"}}>XXX</Text>
        </View>
        <View>
            { contents }
        </View>
        <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
         <Text>This is HOME!</Text>
      </TouchableOpacity>
      </View>
    );
  }

}
