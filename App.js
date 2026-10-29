import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "./screens/inicio";
import Series from "./screens/Series";
import { StatusBar } from "expo-status-bar";
 
const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: { backgroundColor: "#c91a1a" },
          headerTintColor: "#fff"
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: "Presentación" }}
        />
 
        <Stack.Screen
          name="Series"
          component={Series}
          options={{ title: "Series de TV" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}