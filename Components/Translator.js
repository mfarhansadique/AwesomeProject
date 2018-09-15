import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  Video,
  Image,
  Modal,
  TouchableHighlight
} from "react-native";

export default class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      trans: null,
      sign: [
        require("./hello.gif"),
        require("./how.gif"),
        require("./1min.gif")
      ],
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const dictionary = ["hello", "how are you", "wait a minute"];
    const check = this.state.text;

    const mood = this.state.selectedIndex;

    return (
      <View style={{ padding: 10 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              />
              <Text style={{ padding: 10, fontSize: 42 }}>
                {this.state.text}
              </Text>
              <Button
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  for (var i = 0; i < dictionary.length; i++) {
                    if (check == dictionary[i]) {
                      this.setState({ trans: this.state.sign[i] });
                    }
                  }
                }}
                title="Confirm"
              />
            </View>
          </View>
        </Modal>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>{this.state.text}</Text>
        <Button
          onPress={() => {
            this.setModalVisible(true);
          }}
          title="Translate"
        />
        <Image source={this.state.trans} style={{ width: 400, height: 400 }} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent("AwesomeProject", () => PizzaTranslator);
