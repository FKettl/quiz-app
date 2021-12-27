import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro from './src/intro';
import Login from './src/login/entrar';
import Cadastro from './src/login/cadastrar';
import esqueceuSenha from './src/login/esqueceuSenha';

const Stack = createStackNavigator();

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);

  const pular = () => {setShowRealApp(true)}

  return (
    <>
    
      {showRealApp ? (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Cadastro" component={Cadastro}/>
          <Stack.Screen name="esqueceuSenha" component={esqueceuSenha}/>
        </Stack.Navigator>
      </NavigationContainer>
      ) : ( <Intro pular={pular}/>)}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
});