import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button,Image,ScrollView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import AppButton from '../components/AppButton';

function fineDetailsScreen({route,navigation}){
    const listing=route.params
    return(
        <ScrollView>
        <View style={{backgroundColor:"#8E4949"}}>
            
         <Image style={styles.image} />
          
              <View styles={styles.user}>
               <ListItem 
               image={require("../../assets/MCA.jpg")}
               title="1st MCA"
               subtitle="15 Students"></ListItem>
               <AppButton title="Next" style={{backgroundColor:'#F08080',marginLeft:'20%'}}
                //  myPress={handleSubmit}
                myPress={() => navigation.navigate("noDueScreen")}
                 />
              </View>
              <View styles={styles.user}>
               <ListItem 
                image={require("../../assets/BCA.jpg")}
               title="2nd MCA"
               subtitle="10 Students"></ListItem>
               <AppButton title="Next" style={{backgroundColor:'#F08080',marginLeft:'20%'}}
                //  myPress={handleSubmit}
                myPress={() => navigation.navigate("noDueScreen")}
                 />
              </View>
              <View styles={styles.user}>
               <ListItem 
               //image={require("../../assets/MCA.jpg")}
               title="1st MCA"
               subtitle="15 Students"></ListItem>
               <AppButton title="Next" style={{backgroundColor:'#F08080',marginLeft:'20%'}}
                //  myPress={handleSubmit}
                myPress={() => navigation.navigate("noDueScreen")}
                 />
              </View>
              <View styles={styles.user}>
               <ListItem 
               //image={require("../../assets/MCA.jpg")}
               title="1st MCA"
               subtitle="15 Students"></ListItem>
               <AppButton title="Next" style={{backgroundColor:'#F08080',marginLeft:'20%'}}
                //  myPress={handleSubmit}
                myPress={() => navigation.navigate("noDueScreen")}
                 />
              </View>
              <View styles={styles.user}>
               <ListItem 
               //image={require("../../assets/MCA.jpg")}
               title="1st MCA"
               subtitle="15 Students"></ListItem>
               <AppButton title="Next" style={{backgroundColor:'#F08080',marginLeft:'20%'}}
                //  myPress={handleSubmit}
                myPress={() => navigation.navigate("noDueScreen")}
                 />
              </View>
              <View styles={styles.user}>
               <ListItem 
               //image={require("../../assets/MCA.jpg")}
               title="1st MCA"
               subtitle="15 Students"></ListItem>
               <AppButton title="Next" style={{backgroundColor:'#F08080',marginLeft:'20%'}}
                //  myPress={handleSubmit}
                myPress={() => navigation.navigate("noDueScreen")}
                 />
              </View>
          </View>
          </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    card:{
        borderRadius:100,
        marginBottom:20,
        overflow:"hidden"
    },
    container:{
        flex:1,
        padding:20,
        backgroundColor:"white"
    },
    image:{
        width:"100%",
        height:300,
        borderTopRightRadius:100,
        borderTopLeftRadius:100,
        marginBottom:"-85%"
    },
    price:{
        color:"#4ECDC4"
    },
   user:{
        marginVertical:10
   }
})

export default fineDetailsScreen;