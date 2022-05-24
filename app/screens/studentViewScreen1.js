import React from 'react';
import { StyleSheet, Text,  View,Button,Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import AppButton from '../components/AppButton';

function studentViewScreen1({route,navigation}){
    const listing=route.params
    return(
        
        <View style={{backgroundColor:"#FFAC1C"}}>
            
         <Image style={styles.image} />
          
              <View style={styles.box}>
               <ListItem 
               image={require("../../assets/MCA.jpg")}
               title="1st MCA"
               subtitle="3 Students"></ListItem>
               <AppButton title="Next" style={{backgroundColor:'#F08080',marginLeft:'20%',marginBottom:'25%'}}
                //  myPress={handleSubmit}
                myPress={() => navigation.navigate("1MCA")}
                 />
              </View>
              <View style={styles.box}>
               <ListItem 
               image={require("../../assets/BCA.jpg")}
               title="2nd MCA"
               subtitle="5 Students"></ListItem>
               <AppButton title="Next" style={{backgroundColor:'#F08080',marginLeft:'20%',marginBottom:'40%'}}
                //  myPress={handleSubmit}
                myPress={() => navigation.navigate("2MCA")}
                 />
              </View>
              
          </View>
         
    )
    
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,
        borderTopRightRadius:100,
        borderTopLeftRadius:100,
        marginBottom:"-85%"
    },
  
    box:{
        marginVertical:1 ,
        backgroundColor:"#8E4949",
        paddingTop:30
     }
})

export default studentViewScreen1;