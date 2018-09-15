import React from "react";

import {
  View,
  Text,
  Button,
  TouchableHighlight,
  ScrollView,
  Image
} from "react-native";
import GiftedAvatar from "../node_modules/react-native-gifted-chat/src/GiftedAvatar";

export class ChatsListItem extends React.Component {
  render() {
    return (
      <TouchableHighlight>
        <View style={{ flexDirection: "row" }}>
          <GiftedAvatar />
          <View>
            <Text> {this.props.name} </Text>
            <Text> Recent Message </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
