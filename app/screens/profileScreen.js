import React, { useContext } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icons from '../components/Icons';
import ListItemSeperator from '../components/ListItemSeperator';
import AuthContext from '../auth/context';
import storage from '../auth/storage';

const menus = [
    {
        title:"Department",
        icon:{
            name:"google-classroom",
            backgroundColor:"#800000"
        },
    targetScreen:'Department'
},
{
    title:"StudentView",
    icon:{
        name:"cash-register",
        backgroundColor:"#800000"
    },
targetScreen:'MCA dept'
},
{
    title:"FineDetails",
    icon:{
        name:"cash-register",
        backgroundColor:"#800000"
    },
targetScreen:'MCA dept'
},

    {
   
        title:"Form",
        icon:{
            name:"form-select",
            backgroundColor:"#800000"
        },
        targetScreen:'noDueScreen'
    }
]

const profileScreen = ({navigation}) => {
    const handleLogout=()=>{
    setUser(null);
storage.removeToken();
    }
    const{user,setUser}=useContext(AuthContext)
    return (
        <View style={styles.container}>
         <View style={styles.box}>
           <ListItem
            title={user.name}
            subtitle={user.email}
            image={require("../../assets/profile.jpg")}
           ></ListItem>
         </View>


         <View style={styles.box}>
        
         <FlatList
           data={menus}
           keyExtractor={(menu)=> menu.title}
          
         
           renderItem={({item})=>(
               <ListItem
                title={item.title}
                IconComponent={
                    <Icons name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor} />
                }
                ItemSeperatorComponent={ListItemSeperator}
                onPress={()=>navigation.navigate(item.targetScreen)}
                
               >
               </ListItem>
               
           )}
         >
         </FlatList>
         
         </View>
         <View style={styles.box}>
         <ListItem
         title="Log Out" 
         IconComponent={<Icons name="logout" backgroundColor="#800000" />}
         onPress={handleLogout} 
         ></ListItem>
         
         </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       marginTop:0,
       backgroundColor:"#87CEFA",

    },
    box:{
       marginVertical:3 ,
       backgroundColor:"#87CEFA",
        
    },
  
})

export default profileScreen;