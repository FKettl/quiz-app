import React from 'react';
import { Text, View, Image, Pressable, TextInput, Keyboard, Button } from 'react-native';
import styles from "../esqueceuSenha/style"
import { FontAwesome } from "@expo/vector-icons"
import {TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler'

export default function esqueceuSenha({navigation}) {
    return (
        <><View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.goBackButton}>
                <FontAwesome name='chevron-left' size={20} /></TouchableOpacity>
        </View><View style={styles.loginContainer}>
                <Text style={styles.loginText}>Recuperar senha</Text>
                <Pressable onPress={Keyboard.dismiss}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu endereço de e-mail"
                        keyboardType="email-address" />
                    <TouchableOpacity style={styles.buttonCircle}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>Enviar e-mail</Text>
                    </TouchableOpacity>
                </Pressable>
            </View></>
    );
}