import React from 'react';
import { Text, View, Pressable, TextInput, Keyboard } from 'react-native';
import styles from "../entrar/style"
import { FontAwesome } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Entrar({navigation}) {
    return (
        <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Entrar</Text>
            <Pressable onPress={Keyboard.dismiss}>
                <TextInput
                style={styles.input}
                placeholder= "E-mail"
                keyboardType="email-address"
                />
                <View>
                <TextInput 
                style={styles.input}
                placeholder= "Senha"
                keyboardType="visible-password"
                ></TextInput>
                <FontAwesome style={{position:'absolute', left: 320, top:20}}name='eye' size={20}/>
                </View>
                <TouchableOpacity style={{position:'relative', top: -8}} onPress={() => navigation.navigate('esqueceuSenha')}>
                    <Text style={styles.passwordText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCircle}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={{color:'#fff', fontSize:16}}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{top: 26, justifyContent: 'center', paddingBottom:16, alignSelf:'center'}}
                    onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.passwordText}>Crie uma conta</Text>
                </TouchableOpacity>
            </Pressable>
        </View>
    );
}