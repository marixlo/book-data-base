import { Colors } from '@/constants/Colors';
import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { A } from '@expo/html-elements';


export default function Index() {
  return (
    <View style= {styles.container}>
    <View style={styles.loginBox}>
    <View style={styles.topBox}></View>
      <Text style={styles.login}> Login</Text>
      
     <TextInput 
     style={styles.input} 
     placeholder="Email" 
     keyboardType="email-address"
   />
   <TextInput 
     style={styles.input} 
     placeholder="Password" 
     secureTextEntry 
   />
  <TouchableOpacity style={styles.button} onPress={() => alert('Login pressed')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <A href="app/redefinir.tsk">esqueceu sua senha?</A>

   
   
   </View>
   </View>
   


  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C2AB89",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox:{
    width: '40%',
    padding: 20,
    backgroundColor: "#AA9679",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  login :{
    alignSelf: 'center',
    fontFamily: "Inknut-Antiqua",
    fontSize: 35,

  },

  input:{
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,

  },
  button: {
    width: '20%',
    alignSelf: 'center',
    backgroundColor: '#672A15', 
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff', 
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  topBox:{
    marginBottom: 20, 
    backgroundColor:"#261207",
    width: '100%', // Define a largura da div como 100% da largura do loginBox
    height: 60
    

  },

 
});