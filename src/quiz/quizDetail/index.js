import React from "react"
import { Text, View, Image} from 'react-native';
import styles from "./style";
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome } from "@expo/vector-icons"

export default function QuizDetail({navigation, route}) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.goBackButton}>
            <FontAwesome name='chevron-left' size={20}/>
            </TouchableOpacity>
            <Text style={styles.title}>{route.params.title}</Text>
            </View>
            <Image source={route.params.image} style={styles.image}></Image>
            <View style={styles.tagCircle}>
            <Text style={styles.tag}>{route.params.tag}</Text>
            </View>
            <Text style={styles.contentTitle}>Sobre o quiz</Text>
            <View style={styles.textWraper}>
            <Text style={styles.description}>You can launch a new career in web develop-
            {"\n"}ment today by learning HTML & CSS. You don't need {"\n"}a computer science degree or expensive software. All 
            {"\n"}you need is a computer, a bit of time, a lot of {"\n"}determination, and a teacher you trust. </Text>
            <Text style={styles.contentTitle2}>Quantidade de perguntas</Text>
            <Text style={styles.description2}>10</Text>
            <TouchableOpacity style={styles.buttonCircle}
                    onPress={() => navigation.navigate('testQuiz',
                    {
                      image: route.params.image,
                      tag: route.params.tag,
                      title: route.params.title 
                    })}>
                    <Text style={{color:'#fff', fontSize:16}}>Fazer Tentativa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
} 