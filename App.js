import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons"
import { Ionicons } from '@expo/vector-icons';
import Intro from './src/intro'
import Entrar from './src/login/entrar'
import Cadastro from './src/login/cadastrar'
import EsqueceuSenha from './src/login/esqueceuSenha'
import HomeList from './src/home/homeList';
import Config from './src/home/config';
import Perfil from './src/home/perfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: styles.tab,
      headerShown: false,
      tabBarActiveTintColor: '#82327E',
      inactiveTintColor: '#BEBAB3',
    }}>
      <Tab.Screen name="Quizzes" component={HomeList}
       options={{    
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name='book' size={20} color={color}/>
        ),
      }}/>
      <Tab.Screen name="Perfil" component={Perfil}
      options={{    
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name='user' size={20} color={color}/>
        )}}/>
      <Tab.Screen name="Configs" component={Config}
      options={{    
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name='cog' size={20} color={color}/>
        )}}/>
      
    </Tab.Navigator>
  )
}

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
          <Stack.Screen name="Entrar" component={Entrar}/>
          <Stack.Screen name="Cadastro" component={Cadastro}/>
          <Stack.Screen name="esqueceuSenha" component={EsqueceuSenha}/>
          <Stack.Screen name="Home" component={Tabs}/>
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
  tab:{
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width:390,
    alignSelf: 'center'
  }
});