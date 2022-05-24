import React from 'react'
import {ImageBackground,StyleSheet, View,Image,Text,Platform} from 'react-native'
import AppButton from '../components/AppButton'

const Logout = ({navigation}) =>{
      
return(
    <View>
    
    <View style={styles.imageContainer}>
    <Text style={{fontSize:25}}>Are you sure want to logout</Text> 
    
   
    <AppButton title="Yes"
      myPress={() => navigation.navigate("WelcomeScreen")}/>
                 
    <AppButton title="No" 
     myPress={() => navigation.navigate("profileScreen")}/>
    </View>
    </View>
)
}

export default Logout;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'flex-end',
        padding: Platform.OS==='android'?25:0
    },
    image:{
        height:100,
        width:100,  
    },
    imageContainer:{
        position:'absolute',
        top:70,
        marginLeft:30,
        alignItems:'center'
    }
});