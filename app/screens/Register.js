import React, {useContext, useState}  from 'react';
import { Image,ImageBackground,StyleSheet,Text } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import * as Yup from 'yup'
import { Formik } from 'formik';
import AppError from '../components/AppError';
import userApi from '../Api/user';
import AuthContext from '../auth/context';
import jwtDecode from 'jwt-decode';

import authApi from '../Api/auth';
import user from '../Api/user';

let validationSchema  = Yup.object().shape({
    name : Yup.string().required().label('Name').min(1),
    email : Yup.string().required().email().label('Email'),
    password : Yup.number().required().label('Password')
  });

const Register = () => {
  const authContext=useContext(AuthContext);
  const[error,setError]=useState();
async function handleSubmit(userInfo){
   console.log(userInfo)
  const result=await userApi.register(userInfo)


if(!result.ok){
  console.log(result);
  if(result.data) setError(result.data.error)//server processed our request


else{
  //console.log('success')
  setError("An UnExpected error occured");
  console.log(result);
}
setTimeout(()=>{
  setError('')
},3000);
return;
}


const reg=await authApi.login(userInfo.email,userInfo.password)

if(reg.ok) {
  
  console.log(reg.data);
  authContext.setUser(user)
  authStorage.storeToken(reg.data)
}
else{
  console.log('error')
}

}

    return (
        <Screen style={{padding:5,marginBottom:20}}>


 <ImageBackground style={styles.container1} source= {require('../../assets/register.png')} blurRadius={0}>


       {/* <Image  style={styles.image} resizeMode='contain' source= {require('../../assets/download.png')}></Image> */}
        <Formik 
  initialValues={{name:'',email:'', password:''}}
    //onSubmit={authentication(values)}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors, setFieldTouched, touched})=>(
      <>
                  <Text style={{fontSize:18,fontWeight:'bold',marginRight:'80%'}}>Name</Text>
                <AppTextInput
                      //icon ='account' 
                      placeholder='Name'
                      onChangeText={handleChange('name')}
                      onBlur={()=>setFieldTouched('name')}
                   // onChangeText={(text)=>setemail(text)}
                 />
                     
                       {touched.name && <AppError errors={errors.name} />}
                       <Text style={{fontSize:18,fontWeight:'bold',marginRight:'80%'}}>Email</Text>
                       <AppTextInput
                      // icon ='email' 
                       placeholder='Email'
                       onChangeText={handleChange('email')}
                       onBlur={()=>setFieldTouched('email')}
                    // onChangeText={(text)=>setemail(text)}
                  />
                      
                        {touched.email && <AppError errors={errors.email} />}
                        <Text style={{fontSize:18,fontWeight:'bold',marginRight:'70%'}}>Password</Text>
                <AppTextInput
                   //  icon ='lock' 
                     placeholder='Password'
                     secureTextEntry={true}
                     keyboard='numeric'
                     onChangeText={handleChange('password')}
                     onBlur={()=>setFieldTouched('password')}
                  // onChangeText={(text)=>setpassword(text)}
                 />
                        
                        {touched.password && <AppError errors={errors.password} />}
                        
                <AppButton title="Register" style={{backgroundColor:'#F0E68C'}}
                  //  myPress={handleSubmit}
                  myPress={handleSubmit}
                  //  onPress={()=>console.log("working")} 
                 />
                 
      </>
    )} 
   </Formik>
   </ImageBackground>
        </Screen>
    );
}

export default Register;

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    padding:25
  },
  image:{
      height:130,
      width:130,
      justifyContent:'center',
      marginBottom:50,
      marginLeft:100
  },
  container1:{
    
    alignItems:"center",
    justifyContent:'flex-end',
    padding: Platform.OS==='android'?25:0,
    marginTop:-30,
    height:630
}
})