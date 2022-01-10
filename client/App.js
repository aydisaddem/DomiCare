import React, {useState} from 'react';
import Router from "./router.js";
import {StyleSheet}from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './components/Authentification/CredentialsContext.js';

export default function App() {
  const [appReady, setAppReady]= useState(false);
  const [storedCredentials, setStoredCredentials]= useState("")
  const checkLoginCredentials = ()=>{
    AsyncStorage
     .getItem('domicareCredentials')
     .then((result)=>{
       if(result !== null){
         setStoredCredentials(JSON.parse(result));
       } else {
         setStoredCredentials(null);
       }
     })
     .catch(err => console.log(err));
  }
  if(!appReady){
    return (
      <AppLoading
      startAsync={checkLoginCredentials}
      onFinish={()=> setAppReady(true)}
      onError={console.warn}
      />
  
    )
  }
  
  return (
    <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
      
   
      <Router  />
  
    
    </CredentialsContext.Provider>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});