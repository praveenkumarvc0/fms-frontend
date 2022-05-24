import React, {useContext, useState} from 'react';
import { Button, Image,ImageBackground, StyleSheet, View , Text} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import * as Yup from 'yup'
import { Formik } from 'formik';

import AppError from '../components/AppError'
import authApi from '../Api/auth'
import jwtDecode from 'jwt-decode'
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';


let validationSchema  = Yup.object().shape({
    email : Yup.string().required().email().label('Email'),
    password : Yup.number().required().label('Password')
  });

const Login = () => {
  const auth=useContext(AuthContext);
  const handleSubmit =async({email,password})=>{
  
    const result = await authApi.login(email,password)
    if(result.ok){
      const user=jwtDecode(result.data)
      auth.setUser(user)
      authStorage.storeToken(result.data)
      
      }
      else{
        console.log(result.problem);
        
     }
   }
    return (
        <Screen style={styles.container}>
      <ImageBackground style={styles.container1} source= {require('../../assets/login.png')} blurRadius={0}>
        {/* <Image  style={styles.image} resizeMode='contain' source= {require('../../assets/download.png')}></Image> */}
       
  <Formik 
  initialValues={{email:'',password:''}}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors, setFieldTouched, touched})=>(
      <>
      <Text style={{fontSize:18,fontWeight:'bold',marginRight:'80%'}}>Email</Text>
                <AppTextInput
                      //icon ='email' 
                      placeholder='Email'
                      onChangeText={handleChange('email')}
                      onBlur={()=>setFieldTouched('email')}
                 />
                     
                       {touched.email && <AppError errors={errors.email} />}
                       <Text style={{fontSize:18,fontWeight:'bold',marginRight:'70%'}}>Password</Text>
                <AppTextInput
                     //icon ='lock' 
                     
                     placeholder='Password'
                     secureTextEntry={true}
                     keyboard='numeric'
                     onChangeText={handleChange('password')}
                     onBlur={()=>setFieldTouched('password')}
                 /> 
                        {touched.password && <AppError errors={errors.password} />}
                        <Text style={styles.forgot_button}>If you are Forgot Password?<Text> click here..</Text></Text>
                <AppButton title="LOGIN" style={{backgroundColor:'#F0E68C'}}
        //#F08080
                  myPress={handleSubmit}
                  
                onPress={()=>console.log(working)} 
                 />
                
      </>
    )} 
   </Formik>
    </ImageBackground>
</Screen>
      ) }

export default Login;

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
        marginBottom:30
    },
    container1:{
      alignItems:"center",
      justifyContent:'flex-end',
      padding: Platform.OS==='android'?25:0,
      marginTop:-80,
      height:650,
      width:350
  },
  forgot_button: {
    height: 30,
    marginBottom: 10,
    color:'lightblue'
  }
})