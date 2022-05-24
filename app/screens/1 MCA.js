import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button,Image,ScrollView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import AppButton from '../components/AppButton';

function studentDetailsScreen1({route,navigation}){
    const listing=route.params
    return(
        <ScrollView>
        <View style={{backgroundColor:"skyblue"}}>
            
         <Image style={styles.image} />
          
              <View styles={styles.box}>
               <ListItem 
               image={require("../../assets/sundar.jpg")}
               title="Sundar"
               subtitle="Late attened fine"></ListItem>
               <AppButton title="Next" style={{backgroundColor:'#F0E68C',marginLeft:'20%'}}
                //  myPress={handleSubmit}
                myPress={() => navigation.navigate("noDueScreen")}
                 />
              </View>
              <View styles={styles.box}>
               <ListItem 
               image={require("../../assets/gopi.jpg")}
               title="Gopinath"
               subtitle="Semester fees delay"></ListItem>
               <AppButton title="Next" style={{backgroundColor:'#F0E68C',marginLeft:'20%'}}
                //  myPress={handleSubmit}
                myPress={() => navigation.navigate("noDueScreen")}
                 />
              </View>
              <View styles={styles.box}>
               <ListItem 
               image={require("../../assets/bhavia.jpg")}
               title="Geetha"
               subtitle="Improper dressing fine"></ListItem>
               <AppButton title="Next" style={{backgroundColor:'#F0E68C',marginLeft:'20%'}}
                //  myPress={handleSubmit}
                myPress={() => navigation.navigate("noDueScreen")}
                 />
              </View>
             
              
          </View>
          </ScrollView>
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

export default studentDetailsScreen1;