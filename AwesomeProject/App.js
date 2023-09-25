import { StyleSheet } from "react-native";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UploadPic from "./src/components/UploadPic";
import CalculateDistanceOne from "./src/components/CalculateDistanceOne";
import CalculateDistanceTwo from "./src/components/CalculateDistanceTwo";
import { ImageProvider, DistanceProvider } from "./contexts/contexts";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DistanceProvider>
      <ImageProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="UploadPic"
              component={UploadPic}
              options={{ title: "Welcome" }}
            />
            <Stack.Screen
              name="CalculateDistanceOne"
              component={CalculateDistanceOne}
              options={{ title: "Calculate Distance" }}
            />
            <Stack.Screen
              name="CalculateDistanceTwo"
              component={CalculateDistanceTwo}
              options={{ title: "Calculate Distance" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageProvider>
    </DistanceProvider>
  );
}
