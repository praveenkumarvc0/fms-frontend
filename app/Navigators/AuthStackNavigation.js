import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import Register from '../screens/Register'
import Login from '../screens/Login'
import profileScreen from '../screens/profileScreen';
import noDueScreen from '../screens/noDueScreen'


const Stack =createStackNavigator();
const AuthStackNavigator=()=> {
  return (
    <Stack.Navigator>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='RegisterScreen' component={Register}></Stack.Screen>
        <Stack.Screen name='LoginScreen' component={Login}></Stack.Screen>
        {/* <Stack.Screen name='profileScreen' component={profileScreen}></Stack.Screen> */}
        <Stack.Screen name='noDueScreen' component={noDueScreen}></Stack.Screen>
        
        
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AuthStackNavigator;