import React from 'react';
import { Text, View, Image, Pressable, TextInput, Keyboard, Button } from 'react-native';
import styles from "../cadastrar/style"
import { FontAwesome } from "@expo/vector-icons"
import {TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler'

export default function Cadastro({navigation}) {
    return (
        <><View>
            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={
                {
                position:'relative',
                alignItems:'center',
                borderColor:'#BEBAB3',
                borderRadius: 50,
                borderWidth:1,
                marginTop:60,
                width: 48,
                height:48,
                marginLeft: 15,
                justifyContent:'center'
                }
                }>
                <FontAwesome name='chevron-left' size={20}/></TouchableOpacity>
        </View><View style={styles.loginContainer}>
                <Text style={styles.loginText}>Cadastre-se</Text>
                <Text>Crie uma conta gratuitamente</Text>
                <Pressable onPress={Keyboard.dismiss}>  
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        keyboardType="default" />
                     <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        keyboardType="email-address" />
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            keyboardType="visible-password"
                        ></TextInput>
                        <FontAwesome style={{ position: 'absolute', left: 320, top: 20 }} name='eye' size={20} />
                    </View>
                    <TouchableOpacity style={styles.buttonCircle}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>Cadastrar-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'relative', top: 26, justifyContent: 'center', paddingBottom: 16, alignSelf: 'center' }}>
                        <Text style={styles.passwordText} onPress={() => navigation.goBack()}>Entrar</Text>
                    </TouchableOpacity>
                </Pressable>
            </View></>
    );
}   