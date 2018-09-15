import React from "react";

import {
  View,
  Text,
  Button,
  TouchableHighlight,
  ScrollView,
  Image,
  Modal,
  TextInput
} from "react-native";
import GiftedAvatar from "../node_modules/react-native-gifted-chat/src/GiftedAvatar";
import Icon from "react-native-vector-icons/FontAwesome";
import Voice from "react-native-voice";

export class Aid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: "absolute",
      recognized: "",
      pitch: "",
      error: "",
      end: "",
      started: "",
      results: [],
      partialResults: [],
      modalVisible: false,
      text: null,
      trans: null,
      sign: [
        require("./hello.gif"),
        require("./how.gif"),
        require("./1min.gif")
      ]
    };

    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    Voice.onSpeechError = this.onSpeechError.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart(e) {
    this.setState({
      started: "√"
    });
  }

  onSpeechRecognized(e) {
    this.setState({
      recognized: "√"
    });
  }

  onSpeechEnd(e) {
    this.setState({
      end: "√"
    });
  }

  onSpeechError(e) {
    this.setState({
      error: JSON.stringify(e.error)
    });
  }

  onSpeechResults(e) {
    this.setState({
      results: e.value
    });
  }

  onSpeechPartialResults(e) {
    this.setState({
      partialResults: e.value
    });
  }

  onSpeechVolumeChanged(e) {
    this.setState({
      pitch: e.value
    });
  }

  async _startRecognizing(e) {
    this.setState({
      recognized: "",
      pitch: "",
      error: "",
      started: "",
      results: [],
      partialResults: [],
      end: ""
    });
    try {
      await Voice.start("en-US");
    } catch (e) {
      console.error(e);
    }
  }

  async _stopRecognizing(e) {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }

  async _cancelRecognizing(e) {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  }

  async _destroyRecognizer(e) {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      recognized: "",
      pitch: "",
      error: "",
      started: "",
      results: [],
      partialResults: [],
      end: ""
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    const dictionary = ["hello", "how are you", "wait a minute"];
    const check = this.state.text;
    const speech = this.state.partialResults;

    const mood = this.state.selectedIndex;
    return (
      <View>
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
              <TextInput
                style={{ height: 40 }}
                onChangeText={text => this.setState({ text })}
              >
                {this.state.partialResults}
              </TextInput>
              <Button
                onPress={() => {
                  for (var i = 0; i < dictionary.length; i++) {
                    if (check == dictionary[i]) {
                      this.setState({ trans: this.state.sign[i] });
                    }
                  }
                }}
                title="Translate"
              />
              <Button
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                title="Send"
              />
              <Image
                source={this.state.trans}
                style={{ width: 400, height: 400 }}
              />
            </View>
          </View>
        </Modal>
        <View>
          <Icon.Button
            name="hard-of-hearing"
            backgroundColor="#3b5998"
            onPressIn={this._startRecognizing.bind(this)}
            onPressOut={() => {
              this._stopRecognizing.bind(this);
              this.setModalVisible(true);
              //this.setState({ text: this.state.partialResults });
              for (var i = 0; i < dictionary.length; i++) {
                if (speech == dictionary[i]) {
                  this.setState({ trans: this.state.sign[i] });
                }
              }
            }}
          />
        </View>
      </View>
    );
  }
}
