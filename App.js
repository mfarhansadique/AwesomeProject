// Import the screens
import Main from "./Components/Main";
import Chat from "./Components/Chat";
import Chats from "./Components/Chats";

// Import React Navigation
import { createStackNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";

// Create the navigator
const MainStack = createStackNavigator({
  Main: Main,
  Chat: Chat
});

const ChatsStack = createStackNavigator({
  Chats: Chats,
  Chat: Chat
});

export default createBottomTabNavigator(
  {
    //  Calls: CallsStack,
    Main: MainStack,
    // Camera: CameraStack,
    Chats: ChatsStack
    //  Settings: SettingsStack
  },
  {
    /* Other configuration remains unchanged */
  }
);
