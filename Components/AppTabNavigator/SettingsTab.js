import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base'

class SettingsTab extends React.Component {

static navigationOptions = {
tabBarIcon: ({tintColor}) => (
<Icon name = "ios-cog" style={{color: tintColor}}/>

)
}

 render(){
 return(
<View style={styles.container}>
  <Text> SettingsTab </Text>
  </View>

 );
}
}

export default SettingsTab;

  const styles = StyleSheet.create ({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'},

 });