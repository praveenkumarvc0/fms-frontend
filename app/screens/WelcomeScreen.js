import { NONE } from 'apisauce'
import React from 'react'
import {ImageBackground,StyleSheet,SafeAreaView, View,Image,Text,Platform, Button, Alert} from 'react-native'
import AppButton from '../components/AppButton'


const WelcomeScreen = ({navigation}) =>{

    var login=() => {
       
        console.log("Login btn clicked")
        Alert.alert('alert','login yes or no',
        [
          {text:'YES',onPress:()=>console.log('yes')},
          {text:'NO',onPress:()=>console.log('no')}
        ]
        )
    } 
    var register=() => {
     
        console.log("Register btn clicked")
        Alert.alert('alert','register yes or no',
        [
          {text:'YES',onPress:()=>console.log('yes')},
          {text:'NO',onPress:()=>console.log('no')}
        ]
        )
    } 
      
return(
    
    <ImageBackground style={styles.container} source= {require('../../assets/bg.png')} blurRadius={0}>
      
    {/* <View style={styles.imageContainer}>
      <Image style={styles.image} resizeMode='contain' source= {require('../../assets/download.png')}></Image> 
    </View> */}
    
    <AppButton style={styles.container1} title="LOGIN" color="primary" myPress={()=>navigation.navigate('LoginScreen')}/>
    <AppButton style={styles.container1} title="REGISTER" color="secondary" myPress={()=>navigation.navigate('RegisterScreen')} />
    
    
    </ImageBackground> 


)
}


export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'flex-end',
        padding: Platform.OS==='android'?25:0
    },
    image:{
        height:100,
        width:150,
        backgroundColor:NONE,  
    },
    imageContainer:{
        position:'absolute',
        top:150,
        alignItems:'center'
    },
    container1:{
        backgroundColor:'#F0E68C',
        marginBottom:40,
        bottom:50,
        
    }
 
});
