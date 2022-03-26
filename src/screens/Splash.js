import React from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { Audio } from "expo-av";
import theme from "../../theme";
export default class Splash extends React.Component {
  constructor() {
    super();
    this.state = {
      sound: null,
    };
  }

  playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./../../assets/Hello.mp3")
    );
    this.setState({ sound: sound });
    // setSound(sound);
    await sound.playAsync();
  };
  componentDidMount() {
    this.playSound();
    setTimeout(async () => {
      await this.state.sound.pauseAsync();
      this.props.navigation.navigate("Home");
      // go to Home page
    }, 5000);
  }
  render() {
    return (
      <View style={styles._container}>
        <Image
          source={require("./../../assets/writing.png")}
          style={styles._logo}
        />
        <ActivityIndicator color={theme.primary} style={{ marginTop: 30 }} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  _logo: {
    height: 100,
    width: 100,
  },
});
