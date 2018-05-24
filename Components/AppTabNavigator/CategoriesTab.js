import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base'

class CatergoriesTab extends React.Component {

static navigationOptions = {
tabBarIcon: ({tintColor}) => (
<Icon name = "ios-book" style={{color: tintColor}}/>

)
}

 render(){
 return(
<View style={styles.container}>
  <Text> CatergoriesTab </Text>
  </View>

 );
}
}

export default CatergoriesTab;

  const styles = StyleSheet.create ({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'},

 });