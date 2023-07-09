import React from 'react'
import { useFonts } from "expo-font"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "./screens/LoginScreens"
import AppLoading from "expo-app-loading"
import RegisterScreen from "./screens/RegisterScreen"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomTabNavigator from './navigator/BottomTabNavigator'
import DiaryScreen from './screens/DiaryScreen'


const App = () => {
  const [fontsLoaded] = useFonts({
    'VarelaRound': require('./assets/fonts/VarelaRound-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App
