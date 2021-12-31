import React from "react"
import { Text, View, Image} from 'react-native';
import styles from "./style";
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome } from "@expo/vector-icons"

export default function testQuiz({navigation, route}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.goBackButton}>
            <FontAwesome name='chevron-left' size={20}/>
            </TouchableOpacity>
            </View>
            <Text style={styles.pageNumber}>1 de 1</Text>
            <Text style={styles.title}>Qual tag é usada {"\n"}para fazer títulos grandes</Text>
            <View style={styles.card}>
                <Image style={styles.image} source={route.params.image}/>
            </View>
            <TouchableOpacity style={styles.optionsWraper}
            onPress={() => {}}>
                <Text style={styles.option}>{"A.  <h5>"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsWraper}
            onPress={() => {}}>
                <Text style={styles.option}>{"A.  <h5>"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsWraper}
            onPress={() => {}}>
                <Text style={styles.option}>{"A.  <h5>"}</Text>
            </TouchableOpacity>
        </View>
    );
} 