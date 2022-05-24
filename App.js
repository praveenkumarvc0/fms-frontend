import { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage'
import cache from './app/utility/cache';
import { NavigationContainer } from '@react-navigation/native';
// import AuthTabNavigation from './app/Navigators/AuthTabNavigation'
import AuthStackNavigation from './app/Navigators/AuthStackNavigation'
import AuthContext from './app/auth/context';
import storage from './app/auth/storage';
import jwtDecode from 'jwt-decode';
import AppLoading from 'expo-app-loading';
import AccountNavigator from './app/Navigators/AccountNavigator';



export default function App() {
  const[user,setUser]=useState();
  const[loading,setLoading]=useState(false);


  const restoreUser=async()=>{
    const user=await storage.getUser()
    if(user){return setUser(user)};
  }
  if(!loading){
    return(
      <AppLoading startAsync={restoreUser}
      onFinish={() => setLoading(true)}
      onError={console.warn}/>
    )
      
  }
 
  return(
    <AuthContext.Provider value={{user,setUser}}>
    <NavigationContainer>
      {user? <AccountNavigator></AccountNavigator>:
      // <AuthTabNavigation></AuthTabNavigation>:
      <AuthStackNavigation></AuthStackNavigation>}
    </NavigationContainer>
    </AuthContext.Provider>
  )
      }