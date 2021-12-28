import React, { Fragment } from "react"
import { Text, View, TextInput, ScrollView, FlatList} from 'react-native';
import { FontAwesome } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from "./style";


export default function Config({navigation}) {
    return (
        <View style={styles.home}>
            <View style={styles.header}>
            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.goBackButton}>
            <FontAwesome name='chevron-left' size={20}/>
            </TouchableOpacity>
            <Text style={styles.config}>Configurações</Text>
            </View>
            <View style={styles.content}>
            <Text style={styles.info}>Informações da conta</Text>
            <View style={styles.optionsWraper}>
                <View style={styles.iconCircle}> 
                <FontAwesome style={styles.userIcon} name='user' size={15}/>
                </View>
                <Text style={styles.title}>Nome</Text>
                <Text style={styles.subtitle}>Felipe Kettl</Text>
                <FontAwesome  name='chevron-right' size ={20} style={styles.chevron}/>
            </View>
            <View style={styles.optionsWraper}>
                <View style={styles.iconCircle}>
                <FontAwesome style={styles.userIcon} name='user' size={15}/>
                </View>
                <Text style={styles.title2}>Foto de perfil</Text>
                <FontAwesome  name='chevron-right' size ={20} style={styles.chevron}/>
            </View>
            <View style={styles.optionsWraper}>
                <View style={styles.iconCircle}>
                <FontAwesome style={styles.mail} name='envelope' size={15}/>
                </View>
                <Text style={styles.title}>Email</Text>
                <Text style={styles.subtitle}>fekettl@gmail.com</Text>
                <FontAwesome  name='chevron-right' size ={20} style={styles.chevron}/>
            </View>
            <View style={styles.optionsWraper}>
                <View style={styles.iconCircle}>
                <FontAwesome name='lock' size={15} style={styles.lock}/>
                </View>
                <Text style={styles.title}>Senha</Text>
                <Text style={styles.subtitle}>nunca foi alterada</Text>
                <FontAwesome name='chevron-right' size ={20} style={styles.chevron}/>
            </View>
            </View>
        </View>
        
    );
}