import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView,
  Image,
  TouchableHighlight
} from 'react-native';
import {Icon, Container, Content, Header, Body, Button} from 'native-base'
import { StackNavigator } from 'react-navigation';
import SegmentControl from 'react-native-segment-controller';

class HomeTab extends React.Component {

static navigationOptions = {
title: 'Home',};

    constructor(){
      super()
      this.state = {
        selectedIndex: 0,
        selectedIndices: [0],
       customStyleIndex: 0,
      };
    }

    handleCustomIndexSelect = (index) => {
            this.setState({
                ...this.state,
                customStyleIndex: index,
            });
        }




 render(){

 return(
<View style={{flex: 1, alignItems: 'center'}}>
                <Text style= {{fontSize: 20, fontWeight: 'bold', color: '#29a3a3'}}> Manga Scroller</Text>
<SegmentControl
               values={['Latest Updates', 'Most Popular']}
                              selectedIndex={this.state.customStyleIndex}
                              onTabPress={this.handleCustomIndexSelect}
                              borderRadius={0}
                              tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
                              tabStyle={styles.tabStyle}

                              activeTabStyle={styles.activeTabStyle}

                               />
                          {this.state.customStyleIndex === 0 &&
                             <View style = {{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', padding: 20}}>
                             <TouchableHighlight onPress={() => this.props.navigation.navigate('Fire')}>
                                                              <Image style={{width: 75, height: 125}} source={require('./fire.png')} />
                                                          </TouchableHighlight>
                             <TouchableHighlight onPress={() => this.props.navigation.navigate('Grashros')}>
                                                                                           <Image style={{width: 75, height: 125}} source={require('./grashros.png')} />
                                                                                       </TouchableHighlight>
                             <TouchableHighlight onPress={() => this.props.navigation.navigate('Noblesse')}>
                                                                                           <Image style={{width: 75, height: 125, marginBottom: 20}} source={require('./noblesse.png')} />
                                                                                       </TouchableHighlight>
                             <TouchableHighlight onPress={() => this.props.navigation.navigate('Sevensins')}>
                                                                                           <Image style={{width: 75, height: 125}} source={require('./sevensins.png')} />
                                                                                       </TouchableHighlight>
                             <TouchableHighlight onPress={() => this.props.navigation.navigate('Fairy')}>
                                                                                           <Image style={{width: 75, height: 125}} source={require('./fairytail.png')} />
                                                                                       </TouchableHighlight>
                             <TouchableHighlight onPress={() => this.props.navigation.navigate('Sousei')}>
                                                                                           <Image style={{width: 75, height: 125}} source={require('./sousei.png')} />
                                                                                       </TouchableHighlight>

                             </View>}


                          {this.state.customStyleIndex === 1 &&
                             <View style = {{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', padding: 20}}>
                                                          <TouchableHighlight onPress={() => this.props.navigation.navigate('Star')}>
                                                                                           <Image style={{width: 75, height: 125}} source={require('./star.png')} />
                                                                                       </TouchableHighlight>
                                                          <TouchableHighlight onPress={() => this.props.navigation.navigate('Bleach')}>
                                                                                                                        <Image style={{width: 75, height: 125}} source={require('./bleach.png')} />
                                                                                                                    </TouchableHighlight>
                                                          <TouchableHighlight onPress={() => this.props.navigation.navigate('Hajime')}>
                                                                                                                        <Image style={{width: 75, height: 125, marginBottom: 20}} source={require('./hajime.png')} />
                                                                                                                    </TouchableHighlight>
                                                          <TouchableHighlight onPress={() => this.props.navigation.navigate('Onepiece')}>
                                                                                                                        <Image style={{width: 75, height: 125}} source={require('./onepiece.png')} />
                                                                                                                    </TouchableHighlight>
                                                          <TouchableHighlight onPress={() => this.props.navigation.navigate('Mythical')}>
                                                                                                                        <Image style={{width: 75, height: 125}} source={require('./mythical.png')} />
                                                                                                                    </TouchableHighlight>
                                                          <TouchableHighlight onPress={() => this.props.navigation.navigate('Blackclover')}>
                                                                                                                        <Image style={{width: 75, height: 125}} source={require('./blackclover.png')} />
                                                                                                                    </TouchableHighlight>

                                                          </View>}

</View>

 );
}
}


class FireScreen extends React.Component{
static navigationOptions = {
title: 'Enen no Shoubouthai',};
    render() {
      return (
        <WebView
          source={{uri: 'http://mangasupa.com/manga/enen_no_shouboutai'}}
          style={{marginTop: 20}}
        />
      );
    }
  }
  class GrashrosScreen extends React.Component{
  static navigationOptions = {
  title: 'Grashros',};
      render() {
        return (
          <WebView
            source={{uri: 'http://mangasupa.com/manga/grashros'}}
            style={{marginTop: 20}}
          />
        );
      }
    }
    class NoblesseScreen extends React.Component{
    static navigationOptions = {
    title: 'Noblesse',};
        render() {
          return (
            <WebView
              source={{uri: 'https://mangasupa.co/manga/read_noblesse_manga_online_free'}}
              style={{marginTop: 20}}
            />
          );
        }
      }
      class SevensinsScreen extends React.Component{
      static navigationOptions = {
      title: 'Nanatsu on Taizai',};
          render() {
            return (
              <WebView
                source={{uri: 'http://manganelo.com/manga/read_nanatsu_no_taizai_manga_online_free'}}
                style={{marginTop: 20}}
              />
            );
          }
        }
        class FairyScreen extends React.Component{
        static navigationOptions = {
        title: 'Fairy Tale',};
            render() {
              return (
                <WebView
                  source={{uri: 'https://mangarock.com/manga/mrs-serie-69934'}}
                  style={{marginTop: 20}}
                />
              );
            }
          }
          class SouseiScreen extends React.Component{
          static navigationOptions = {
          title: 'Twin Star Exorcists',};
              render() {
                return (
                  <WebView
                    source={{uri: 'https://mangarock.com/manga/mrs-serie-232438'}}
                    style={{marginTop: 20}}
                  />
                );
              }
            }


 class StarScreen extends React.Component{
          static navigationOptions = {
          title: 'Star Martial God Technique',};
              render() {
                return (
                  <WebView
                    source={{uri: 'http://mangasupa.com/manga/star_martial_god_technique'}}
                    style={{marginTop: 20}}
                  />
                );
              }
            }

    class BleachScreen extends React.Component{
             static navigationOptions = {
             title: 'Bleach',};
                 render() {
                   return (
                     <WebView
                       source={{uri: 'http://manganelo.com/manga/read_bleach_manga_online_for_free2'}}
                       style={{marginTop: 20}}
                     />
                   );
                 }
                 }

    class HajimeScreen extends React.Component{
             static navigationOptions = {
             title: 'Hajime no Ippo',};
                 render() {
                   return (
                     <WebView
                       source={{uri: 'http://mangasupa.com/manga/read_hajime_no_ippo_manga'}}
                       style={{marginTop: 20}}
                     />
                   );
                 }
               }


     class OnepieceScreen extends React.Component{
              static navigationOptions = {
              title: 'One Piece',};
                  render() {
                    return (
                      <WebView
                        source={{uri: 'http://manganelo.com/manga/read_one_piece_manga_online_free4'}}
                        style={{marginTop: 20}}
                      />
                    );
                  }
                }

     class MythicalScreen extends React.Component{
              static navigationOptions = {
              title: 'The Mythical Realm',};
                  render() {
                    return (
                      <WebView
                        source={{uri: 'http://mangasupa.com/manga/the_mythical_realm'}}
                        style={{marginTop: 20}}
                      />
                    );
                  }
                }

    class BlackcloverScreen extends React.Component{
             static navigationOptions = {
             title: 'Black Clover',};
                 render() {
                   return (
                     <WebView
                       source={{uri: 'http://manganelo.com/manga/black_clover'}}
                       style={{marginTop: 20}}
                     />
                   );
                 }
               }


  const RootStack = StackNavigator(
    {
      Home: {
        screen: HomeTab,
      },
      Fire: {
        screen: FireScreen,
      },
      Grashros: {
              screen: GrashrosScreen,
            },
      Noblesse: {
              screen: NoblesseScreen,
            },
      Sevensins: {
              screen: SevensinsScreen,
            },
      Fairy: {
              screen: FairyScreen,
            },
      Sousei: {
                    screen: SouseiScreen,
                  },

      Star: {
                          screen: StarScreen,
                        },

      Bleach: {
                          screen: BleachScreen,
                        },

      Hajime: {
                          screen: HajimeScreen,
                        },

      Onepiece: {
                          screen: OnepieceScreen,
                        },

      Mythical: {
                          screen: MythicalScreen,
                        },

      Blackclover: {
                          screen: BlackcloverScreen,
                        },

    },
    {
      initialRouteName: 'Home',
    }
  );

  export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }


  const styles = StyleSheet.create ({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'},

 });


