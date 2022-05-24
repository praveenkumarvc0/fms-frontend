import React, {useContext, useState}  from 'react';
import { moduleName,Text,ScrollView} from 'react-native';
import Screen from '../components/Screen';
// import TextInputs from '../components/TextInput';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AppError from '../components/AppError';
import userApi from '../Api/user';
import AuthContext from '../auth/context';
import jwtDecode from 'jwt-decode';

import authApi from '../Api/auth';
import user from '../Api/user';

let validationSchema  = Yup.object().shape({
    name : Yup.string().required().label('Name').min(1),
    department : Yup.string().required().label('Department').min(1),
    regno : Yup.string().required().email().label('Regno'),
    fine : Yup.string().required().email().label('Fine'),
    amount : Yup.string().required().email().label('Amount'),
    year : Yup.string().required().email().label('Year')
  });

const noDueScreen = ({navigation}) => {
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

}
    return (
        <Screen style={{backgroundColor:"#8E4949",marginTop:-26}}>
       <ScrollView>
        <Formik 
  initialValues={{name:'',department:'',fine:'',amount:'',regno:'',year:''}}
    //onSubmit={authentication(values)}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors, setFieldTouched, touched})=>(
      <>
      <Text style={{fontSize:28,marginLeft:100,marginBottom:-10,marginTop:10,fontWeight:'bold'}}>No-Due Slip</Text>
      <Text style={{fontSize:20,marginLeft:10,marginBottom:-10,marginTop:10}}>Name</Text>
                <AppTextInput
                       
                      placeholder='Enter Your Name'
                      onChangeText={handleChange('name')}
                      onBlur={()=>setFieldTouched('name')}
                 />
                     
                       {touched.name && <AppError errors={errors.name} />}
                       <Text style={{fontSize:20,marginLeft:10,marginBottom:-10}}>Department</Text>
                       <AppTextInput
                      placeholder='Enter Your Department'
                      onChangeText={handleChange('department')}
                      onBlur={()=>setFieldTouched('department')}
                 />
                       {touched.department && <AppError errors={errors.department} />}
                       <Text style={{fontSize:20,marginLeft:10,marginBottom:-10}}>Fine Type</Text>

                       <AppTextInput
                       placeholder='Fine Type'
                       onChangeText={handleChange('fine')}
                       onBlur={()=>setFieldTouched('fine')}
                  />
                      
                        {touched.fine && <AppError errors={errors.fine} />}
                        <Text style={{fontSize:20,marginLeft:10,marginBottom:-10}}>Fine Amount</Text>

                          <AppTextInput
                          placeholder='Fine Amount'
                          onChangeText={handleChange('Amount')}
                          onBlur={()=>setFieldTouched('Amount')}
                          />

                          {touched.amount && <AppError errors={errors.amount} />}
                        <Text style={{fontSize:20,marginLeft:10,marginBottom:-10}}>RegNo</Text>
                        <AppTextInput
                      placeholder='Enter Your Regno'
                      onChangeText={handleChange('Regno')}
                      onBlur={()=>setFieldTouched('Regno')}
                 />
                     
                       {touched.regno && <AppError errors={errors.regno} />}
                       <Text style={{fontSize:20,marginLeft:10,marginBottom:-10}}>Year</Text>
                        <AppTextInput
                      placeholder='Enter Year'
                      onChangeText={handleChange('year')}
                      onBlur={()=>setFieldTouched('year')}
                 />
                     
                       {touched.year && <AppError errors={errors.year} />}
                <AppButton title="Submit" style={{backgroundColor:'#F08080',marginLeft:'20%'}}
                 myPress={handleSubmit}
                   
                 />
      </>
    )} 
    
   </Formik>
   </ScrollView>
        </Screen>
    );
}

export default noDueScreen;