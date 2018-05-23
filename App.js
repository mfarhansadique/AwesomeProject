import React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
 render(){
  return(
  <View style = {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
   <Text> Latest Updates </Text>
   </View>

  );

  }
 }

 class CategoriesScreen extends React.Component {
  render(){
   return(
   <View style = {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
    <Text> Categories </Text>
    </View>

   );

   }
  }

   class RecentScreen extends React.Component {
    render(){
     return(
     <View style = {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Recent </Text>
      </View>

     );

     }
    }

     class SettingsScreen extends React.Component {
      render(){
       return(
       <View style = {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Settings </Text>
        </View>

       );

       }
      }

  export default createBottomTabNavigator({
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Recent: RecentScreen,
    Settings: SettingsScreen,
  });