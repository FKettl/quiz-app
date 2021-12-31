import React, { Fragment } from "react"
import { Text, View, TextInput, ScrollView, FlatList, Image} from 'react-native';
import { FontAwesome } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from "./style";
import HistoItem from "./histoItem";


const histoItem = [
    {
      key: 's1',
      title: 'HTML básico ',
      description: 'Testes seus conhecimentos em tags básicas...',
      image: require('../../../img/quiz1.png'),
      tag: 'FÁCIL',
      acertos: '5',
      data: '29/12/2021'
    },
    {
      key: 's2',
      title: 'HTML e CSS ',
      description: 'Usando estilos inline no HTML',
      image: require('../../../img/quiz2.png'),
      tag: 'FÁCIL',
      acertos: '2',
      data: '25/12/2021'
    },
    {
      key: 's3',
      title: 'UI',
      description: 'Questões sobre interface',
      image: require('../../../img/quiz3.png'),
      tag: 'FÁCIL',
      acertos: '10',
      data: '30/12/2021'
    },
  ];

export default function Histo({navigation}) {

    const escolheCor = (valor) => {
        let cor = '';
        (valor>=6) ? cor = '#5BA092': cor ='#EF4949';
        return(cor)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.goBackButton}>
            <FontAwesome name='chevron-left' size={20}/>
            </TouchableOpacity>
            <Text style={styles.historico}>Seu histórico</Text>
            </View>
            <FlatList
                style={styles.listaHisto}
                data={histoItem}
                renderItem={({item})=>{
                return <HistoItem image={item.image} title={item.title} description={item.description} tag={item.tag}
                acertos={item.acertos} data={item.data} acertoColor={escolheCor(item.acertos)}/>
                }}
            />
        
        </View>
        
    );
}