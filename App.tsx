import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoadingPage from './src/components/pages/LoadingScreen/LoadingPage'
import WelcomeScreen from './src/components/pages/WelcomeScreen.tsx/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OtpScreen from './src/components/pages/OtpScreen/OtpScreen'
import LoginScreen from './src/components/pages/LoginScreen/LoginScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome_screen'>
        <Stack.Screen name='loading_screen' component={LoadingPage} options={{headerShown : false }}/>
        <Stack.Screen name='welcome_screen' component={WelcomeScreen} options={{ headerShown : false }} />
        <Stack.Screen name='otp_screen' component={OtpScreen} options={{headerShown :false}} />
        <Stack.Screen name='login_screen' component={LoginScreen} options={{headerShown: false}} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})