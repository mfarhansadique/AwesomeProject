import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Icon, Container, Content, Header, Body, Button} from 'native-base'


class HomeTab extends React.Component {

static navigationOptions = {
tabBarIcon: ({tintColor}) => (
<Icon name = "ios-home" style={{color: tintColor}}/>

)
}

 render(){
 return(
<Container style={{ flex:1, backgroundColor: 'white'}}>

<Header>
<Body><Text> Home </Text></Body>
</Header>
<Content>
<View style={{flexDirection: 'row', alignItems: 'center'}}>

<Button borded light
style = {{flex: 3, marginLeft: 0, justifyContent :'center', height: 40}}>
<Text>Latest Updates</Text></Button>
<Button borded light
style = {{flex: 3, marginLeft: 0, justifyContent :'center', height: 40}}><Text>Popular</Text></Button>
</View>




</Content>
</Container>
 );
}
}

export default HomeTab;
  const styles = StyleSheet.create ({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'},

 });