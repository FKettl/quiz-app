import React, { useState } from "react"
import { Text, View, Image} from 'react-native';
import styles from "./style";
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome } from "@expo/vector-icons"

export default function TestQuiz({navigation, route}) {

    const [borda1, setBorda1] = useState('#BEBAB3')
    const [borda2, setBorda2] = useState('#BEBAB3')
    const [borda3, setBorda3] = useState('#BEBAB3')
    const [clicou, setClicou] = useState(false)
    const [background1, setBackground1] = useState(null)
    const [background2, setBackground2] = useState(null)
    const [background3, setBackground3] = useState(null)
    const [acertou, setAcertou] = useState(null)

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
            <TouchableOpacity style={{
                width: 343,
                height: 58,
                marginTop: 16,
                marginLeft: 16,
                borderWidth: 1,
                borderRadius: 16,
                borderColor: borda1,
                backgroundColor: background1}}
            onPress={() => {
                if (!clicou){
                    setBorda1('#EF4949');
                    setClicou(true);
                    setBackground1('#FFF5EE');
                    setAcertou(false)}
                }}>
                <Text style={styles.option}>{"A.  <h5>"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width: 343,
                height: 58,
                marginTop: 16,
                marginLeft: 16,
                borderWidth: 1,
                borderRadius: 16,
                borderColor: borda2,
                backgroundColor: background2}}
            onPress={() => {
                if (!clicou){
                    setBorda2('#EF4949');
                    setClicou(true);
                    setBackground2('#FFF5EE');
                    setAcertou(false)}
                }}>
                <Text style={styles.option}>{"B.  <p>"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                width: 343,
                height: 58,
                marginTop: 16,
                marginLeft: 16,
                borderWidth: 1,
                borderRadius: 16,
                borderColor: borda3,
                backgroundColor: background3}}
            onPress={() => {
                if (!clicou){
                 setBorda3('#5BA092');
                 setClicou(true);
                 setBackground3('#FFF5EE');
                 setAcertou(true)}
                 }}>
                <Text style={styles.option}>{"C.  <h1>"}</Text>
            </TouchableOpacity>
            {clicou? <TouchableOpacity style={styles.buttonCircle}
                    onPress={() => navigation.navigate('Resultado',
                    {
                    acerto: acertou,
                    image: route.params.image,
                    tag: route.params.tag,
                    title: route.params.title
                    })}>
                    <Text style={{color:'#fff', fontSize:16}}>Continuar</Text>
                </TouchableOpacity>: <View/>}
        </View>
    );
} 