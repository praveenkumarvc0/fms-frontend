import React from 'react';
import { Button } from 'react-native';
import {NavigationContainer,useNavigation} from '@react-navigation/native'

  const Link = () => {
    const navigation=useNavigation();
    return(
      <Button title="Click Here" onPress={()=>navigation.navigate('noDueScreen')}></Button>
      
    )
  }
  
  export default Link;
  