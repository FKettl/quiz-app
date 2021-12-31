import React, { Fragment } from "react"
import { Text, View, TextInput, ScrollView, FlatList, Image} from 'react-native';
import { FontAwesome } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from "./style";


export default function Perfil({navigation}) {
    return (
        <View style={styles.home}>
            <View style={styles.header}>
            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.goBackButton}>
            <FontAwesome name='chevron-left' size={20}/>
            </TouchableOpacity>
            <Text style={styles.perfil}>Perfil</Text>
            </View>
            <View style={styles.content}>
            <Image style={styles.image} source={require('../../img/avatar.png')}></Image>
            <TouchableOpacity style={styles.optionsWraper}
            onPress={() => navigation.navigate('Historico')}>
                <Text style={styles.title}>Seu histórico</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsWraper}
            onPress={() => navigation.navigate('About')}>
                <Text style={styles.title}>Sobre o app</Text>
            </TouchableOpacity>
            </View>
        
        </View>
        
    );
}