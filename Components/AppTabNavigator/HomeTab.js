import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView
} from 'react-native';
import {Icon, Container, Content, Header, Body, Button} from 'native-base'
import { StackNavigator } from 'react-navigation';


class HomeTab extends React.Component {

static navigationOptions = {
tabBarIcon: ({tintColor}) => (
<Icon name = "ios-home" style={{color: tintColor}}/>

)
}

constructor(props){
super(props)
this.state = {
 activeIndex: 0}
}
segmentClicked = (index) => {
this.setState = {
activeIndex: 0
}
}

renderSection = () =>{
if (this.state.activeIndex == 0){
return(
<View>
<Text>Latest Update Section </Text>

</View>
)
}
else if (this.state.activeIndex == 1){
          return(
          <View>
          <Text>Popular Section </Text>
          </View>
)
}
}


 render(){
 return(
<Container style={{ flex:1, backgroundColor: 'white'}}>

<Header>
<Body><Text> Home </Text></Body>
</Header>

<Content><View>
<View style={{flexDirection: 'row', alignItems: 'center'}}>

<Button borded light
style = {{flex: 3, marginLeft: 0, justifyContent :'center', height: 40}}
onPress={()=>this.segmentClicked(0)}
active={this.state.activeIndex == 0} >
<Text>Latest Updates</Text>
</Button>


<Button borded light
style = {{flex: 3, marginLeft: 0, justifyContent :'center', height: 40}}
onPress={()=>this.segmentClicked(1)}
active={this.state.activeIndex == 1}>
<Text>Popular</Text>
</Button>
</View>

{this.renderSection()}
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