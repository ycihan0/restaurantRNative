import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchScreen from "./screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";
import ResultsShowScreen from "./screens/ResultsShowScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultShow" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
