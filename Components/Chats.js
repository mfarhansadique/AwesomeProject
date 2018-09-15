import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  ScrollView
} from "react-native";
import { ChatsListItem } from "./ChatsListItem";

class Chats extends React.Component {
  static navigationOptions = {
    title: "Chats"
  };

  state = {
    name: ""
  };

  onPress = () =>
    this.props.navigation.navigate("Chat", { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <ScrollView style={{ padding: 10 }}>
        <ChatsListItem />
      </ScrollView>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: "#111111",
    borderWidth: 1
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset
  }
});

export default Chats;
