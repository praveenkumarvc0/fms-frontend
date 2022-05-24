import React,{useState} from 'react';
import { FlatList, View, Text } from 'react-native';
import ListItem from '../components/ListItem1';
import ListItemSeperator from '../components/ListItemSeperator';
// import ListItemDeleteAction from '../components/ListItemDeleteAction';



const Department = [
    {
        id: 1,
        description: "MCA",
        image: require("../../assets/MCA.jpg"),
        
    },
    {
        id: 2,
        description: "BCA",
        image: require("../../assets/BCA.jpg"),
    },
    
    {
        id: 3,
        description: "Bsc Maths",
        image: require("../../assets/maths.jpg"),
    },
    {
        id: 4,
        description: "Msc Maths",
        image: require("../../assets/maths1.jpg"),
    },
    {
        id: 5,
        description: "Bsc CS",
        image: require("../../assets/bcs.png"),
    },
    {
        id: 6,
        description: "Msc CS",
        image: require("../../assets/mcs.jpg"),
    },
    {
        id: 7,
        description: "English",
        image: require("../../assets/english.jpg"),
    },
    {
        id: 8,
        description: "Tamil",
        image: require("../../assets/tamil.jpg"),
    },
    
];


const departmentScreen = ({navigation})=>{

     const [department, setdept] = useState(Department);
     //const click = (item)
    //  console.log('im pressed', item) 
    function click(item){
        //console.log('im pressed', item)
    }
    const [refreshing, setrefreshing] = useState(false);
   
    const deleteItem=(item)=>{
        setdept(department.filter((itm)=>itm.id !==item.id))
    }
return( 
  <FlatList style={{backgroundColor:"#87CEFA"}} data={department}
            keyExtractor={(message)=>message.id.toString()}
            renderItem={({item})=>(
                <ListItem 
                title={item.title} 
                subtitle={item.description} 
                image={item.image}
                myPress={()=>navigation.navigate("MCA dept")}
                // renderLeftActions={()=>(<ListItemDeleteAction onPress={()=>deleteItem(item)}></ListItemDeleteAction>)}
    />)}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={()=>setdept(Department)}
   />
   
    )}


 export default departmentScreen;