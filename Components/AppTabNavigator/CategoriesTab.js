import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView
} from 'react-native';
import ActionScreen from './CategoryOptions/ActionScreen'
import {Icon, Container, Content, Header, Body, Button} from 'native-base'
import { createStackNavigator } from 'react-navigation';

class CatergoriesTab extends React.Component {

static navigationOptions = {
tabBarIcon: ({tintColor}) => (
<Icon name = "ios-book" style={{color: tintColor}}/>

)
}

 render(){
 return(
<Container style={{ flex:1, backgroundColor: 'white'}}>

<Header>
<Body><Text> Catergories </Text></Body>
</Header>

<Content>


<View style={{flexDirection: 'row', alignItems: 'center'}}>
<Button borded light style = {{flex: 3, marginLeft: 0, justifyContent :'center', height: 40}}
onPress={() => this.props.navigation.navigate('Action')}>
<Text> Action </Text>
</Button>
</View>

<View style={{flexDirection: 'row', alignItems: 'center'}}>
<Button borded light style = {{flex: 3, marginLeft: 0, justifyContent :'center', height: 40}}>
<Text> Mystery </Text>
</Button></View>

<View style={{flexDirection: 'row', alignItems: 'center'}}>
<Button borded light style = {{flex: 3, marginLeft: 0, justifyContent :'center', height: 40}}>
<Text> Fantasy </Text>
</Button></View>

<View style={{flexDirection: 'row', alignItems: 'center'}}>
<Button borded light style = {{flex: 3, marginLeft: 0, justifyContent :'center', height: 40}}>
<Text> Horror </Text>
</Button></View>

<View style={{flexDirection: 'row', alignItems: 'center'}}>
<Button borded light style = {{flex: 3, marginLeft: 0, justifyContent :'center', height: 40}}>
<Text> Adventure </Text>
</Button>
</View>
</Content>
</Container>

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


