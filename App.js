// //import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { LogBox, View } from "react-native";
import FlashMessage from "react-native-flash-message";
import Navigation from "./src/navigation";
import "react-native-get-random-values";

LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
LogBox.ignoreAllLogs(); // ignore all logs

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const getFonts = () => {
    try {
      return Font.loadAsync({
        "CG-regular": require("./assets/fonts/CormorantGaramond-Regular.ttf"),
        "CG-bold": require("./assets/fonts/CormorantGaramond-Bold.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      });
    } catch (err) {
      console.log("--------->", err);
    }
  };

  if (fontsLoaded) {
    return (
      <View style={{ flex: 1 }}>
        <Navigation />
        <FlashMessage
          position="bottom"
          // style={{ top: 40 }}
          floating={true}
        />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.log("")}
      />
    );
  }
}
