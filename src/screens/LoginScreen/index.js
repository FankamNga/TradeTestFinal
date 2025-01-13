import React, {  useState } from 'react';
import {  TextInput,  Alert, Text, TouchableOpacity } from 'react-native';
import login from './style';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';



const LoginScreen = ({ navigation }) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Erreur', 'Identifiants incorrects');
    }
  };

  return (
   
     
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']} // Dégradé bleu
      style={login.gradiant} // Style du dégradé
    >
      <Text style={login.title}>Welcome</Text>
      <TextInput style={login.input} placeholder="Username" onChangeText={setUsername} />
      <TextInput style={login.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <TouchableOpacity activeOpacity={0.7} style={login.button} onPress={handleLogin} >
        <Text>Se connecter</Text>
      </TouchableOpacity>
    </LinearGradient>

    
  );
};



export default LoginScreen;
