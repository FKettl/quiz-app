import React from "react"
import { Text, View, Image} from 'react-native';
import styles from "./style";

export default function HomeItems(props) {
    return (
        <View style={styles.card}>
            <Image source={props.image} style={styles.image}></Image>
            <View style={styles.tagCircle}>
            <Text style={styles.tag}>{props.tag}</Text>
            </View>
            <View style={styles.textWraper}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            </View>
        </View>
    );
} 