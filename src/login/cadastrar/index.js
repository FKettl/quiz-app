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
            style={styles.goBackButton}>
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
                    <TouchableOpacity style={styles.buttonCircle}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={{ color: '#fff', fontSize: 16 }}>Cadastrar-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'relative', top: 26, justifyContent: 'center', paddingBottom: 16, alignSelf: 'center' }}>
                        <Text style={styles.passwordText} onPress={() => navigation.goBack()}>Entrar</Text>
                    </TouchableOpacity>
                </Pressable>
            </View></>
    );
}   