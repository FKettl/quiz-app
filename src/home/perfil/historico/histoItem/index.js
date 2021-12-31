import React from "react"
import { Text, View, Image} from 'react-native';
import styles from "./style";

export default function HistoItem(props) {
    return (
        <View style={styles.card}>
            <Image source={props.image} style={styles.image}></Image>
            <View style={styles.tagCircle}>
            <Text style={styles.tag}>{props.tag}</Text>
            </View>
            <View style={styles.textWraper}>
            <View style={styles.acertos}>
                <Text style={styles.acertosText, {color:props.acertoColor}}>Você acertou {props.acertos} de 10</Text>
                <Text style={styles.dataText}>Em {props.data}</Text>
            </View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            </View>
        </View>
    );
} 