// App.js
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DaftarMember from "./DaftarMember";
import DetailMember from "./DetailMember";

import HalamanLogin from "./HalamanLogin";
import { Button, Text, View } from "react-native";
import ProfileScreen from "./ProfileScreen";
import HalamanUtama from "./HalamanUtama";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={HalamanLogin} />
        <Stack.Screen
          name="Home"
          component={HalamanUtama}
          options={{ title: "Selamat Datang Di MemberClub" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="DaftarMember" component={DaftarMember} />
        <Stack.Screen name="DetailMember" component={DetailMember} />
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
