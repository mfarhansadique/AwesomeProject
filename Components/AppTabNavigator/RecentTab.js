import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base'

class RecentTab extends React.Component {

static navigationOptions = {
tabBarIcon: ({tintColor}) => (
<Icon name = "ios-clock" style={{color: tintColor}}/>

)
}

 render(){
 return(
<View style={styles.container}>
  <Text> RecentTab </Text>
  </View>

 );
}
}

export default RecentTab;

  const styles = StyleSheet.create ({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'},

 });