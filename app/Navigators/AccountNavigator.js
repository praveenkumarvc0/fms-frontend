import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import profileScreen from '../screens/profileScreen';
import departmentScreen from '../screens/departmentScreen';
import noDueScreen from '../screens/noDueScreen';
import studentViewScreen from '../screens/studentViewScreen';
import studentViewScreen1 from '../screens/studentViewScreen1';
import fineDetailsScreen from '../screens/fineDetailsScreen';
import studentDetailsScreen from '../screens/studentDetailsScreen';
import studentDetailsScreen1 from '../screens/1 MCA';



const Stack = createStackNavigator();
const AccountNavigator=()=> (
    <Stack.Navigator>
        <Stack.Screen name='Profile' component={profileScreen}></Stack.Screen>
        <Stack.Screen name='Department' component={departmentScreen} ></Stack.Screen>
        <Stack.Screen name='MCA dept' component={studentViewScreen}></Stack.Screen>
        <Stack.Screen name='BCA dept' component={studentViewScreen1}></Stack.Screen>
        <Stack.Screen name='2MCA' component={studentDetailsScreen}></Stack.Screen>
        <Stack.Screen name='1MCA'component={studentDetailsScreen1}></Stack.Screen>
        <Stack.Screen name='FineDetails' component={fineDetailsScreen}></Stack.Screen>
        <Stack.Screen name='noDueScreen' component={noDueScreen}></Stack.Screen>
        
    </Stack.Navigator>
)

const styles = StyleSheet.create({
  container: {}
});

export default AccountNavigator;