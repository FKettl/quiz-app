import React, { Fragment } from "react"
import { Text, View, TextInput, ScrollView, FlatList} from 'react-native';
import { FontAwesome } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from "./style";
import HomeItems from "./homeItems";


const quizItem = [
  {
    key: 's1',
    title: 'HTML básico ',
    description: 'Testes seus conhecimentos em tags básicas...',
    image: require('../../img/quiz1.png'),
    tag: 'FÁCIL',
  },
  {
    key: 's2',
    title: 'HTML e CSS ',
    description: 'Usando estilos inline no HTML',
    image: require('../../img/quiz2.png'),
    tag: 'FÁCIL',
  },
  {
    key: 's3',
    title: 'UI',
    description: 'Questões sobre interface',
    image: require('../../img/quiz3.png'),
    tag: 'FÁCIL',
  },
  {
    key: 's4',
    title: 'Swift',
    description: 'Advanced iOS apps',
    image: require('../../img/quiz4.png'),
    tag: 'FÁCIL',
  },
  {
    key: 's5',
    title: 'Scrum',
    description: 'Advanced project organization course',
    image: require('../../img/quiz5.png'),
    tag: 'MÉDIO',
  },
];

export default function HomeList({navigation}) {
    return (
        <View style={styles.home}>
            <Text style={styles.hello}>Hello,</Text>
            <Text style={styles.name}>Felipe Kettl</Text>
            <TextInput style={styles.pesquisa} keyboardType='default' placeholder='Pesquisar quiz'>
            </TextInput>
            <FontAwesome style={styles.icon} name='search' size={20}></FontAwesome>
            <Fragment>
        <View style={styles.filters}>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=>{}}
          >
            <Text style={styles.textButtonQuery}>#HTML</Text>    
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=>{}}
          >
            <Text style={styles.textButtonQuery}>#UX</Text>    
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=>{}}
          >
            <Text style={styles.textButtonQuery}>#Swift</Text>    
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonQuery}
            onPress={()=>{}}
          >
            <Text style={styles.textButtonQuery}>#UI</Text>    
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.listaQuiz}>
          <FlatList
            data={quizItem}
            renderItem={({item})=>{
              return <HomeItems image={item.image} title={item.title} description={item.description} tag={item.tag}/>
            }}
          />
        </ScrollView>
        </Fragment>
        </View>
        
    );
}