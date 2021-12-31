import React, { Fragment } from "react"
import { Text, View, TextInput, ScrollView, FlatList, Image} from 'react-native';
import { FontAwesome } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from "./style";


export default function About({navigation}) {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.goBackButton}>
            <FontAwesome name='chevron-left' size={20}/>
            </TouchableOpacity>
            <Text style={styles.about}>Sobre o app</Text>
            </View>
            <View style={styles.content}>
              <Image style={styles.image} source={require('../../../img/aboutUs.png')}/>
              <Text style={styles.title}>PixelQuizzes</Text>
              <Text style={styles.description}>O PixelQuizzes é um aplicativo criado para facilitar
              o aprendizado de conteúdos que nem sempre são os {"\n"}melhores de se aprender.
               Através da nossa {"\n"}plataforma, prometemos facilitar a sua {"\n"}aprendizagem em conceitos dos mais variados {"\n"}tipos.
                Isso se dá pelo fato de usarmos uma {"\n"}metodologia inovadora para aprendizagem!</Text>
            </View>
        
        </View>
        
    );
}