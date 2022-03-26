import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import AddNotes from "../screens/AddNotes";
import { AntDesign } from "@expo/vector-icons";
import NotesDetails from "../screens/NotesDetails";
import Splash from "../screens/Splash";
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NotesDetails"
          component={NotesDetails}
          options={{
            title: "Note Input",
            headerTitleStyle: {
              fontFamily: "Poppins-Medium",
            },
          }}
        />

        <Stack.Screen
          name="AddNotes"
          component={AddNotes}
          options={{
            headerRight: () => (
              <View>
                <AntDesign name="addfile" size={24} color="black" />
              </View>
            ),
            title: "Add Note",
            headerTitleStyle: {
              fontFamily: "Poppins-Medium",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
