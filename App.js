/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    titles: 'QuestionSwap',
    };
    }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Awesome Project Home Screen</Text>
        <Button
         title="Go to Instructions"
         onPress={() => {
         this.props.navigation.navigate('Instructions',{
          itemID: 86,
          otherParam: 'anything',
         });
         }}
       />
      </View>
    );
  }
}


  class InstructionsScreen extends React.Component {
    render(){
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const otherParam = navigation.getParam('otherParam', 'some default value');

      return (
        <View styles ={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Instructions</Text>
          <Text>ItemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
          title="Go to Instructions again"
          onPress={() =>
          this.props.navigation.push('Instructions', {
          itemId: Math.floor(Math.random() * 100),
          })}
          />
          <Button
            title="go home"
            onPress={() => this.props.navigation.navigate('Home')}
            />
          <Button
            title = "Go Back"
            onPress={() => this.props.navigation.goBack()}
            />
        </View>
        );
     }
    }

    const RootStack = createStackNavigator(
      {
        Home: HomeScreen,
        Instructions: InstructionsScreen,
        },
        {
         initialRoutneName: 'Home',
         }
        );

export default class App extends React.Component {
 render() {
   return <RootStack />;
    }
   }
