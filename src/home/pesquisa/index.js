import React, { Fragment, useState, useEffect } from "react"
import { Text, View, TextInput, ScrollView, FlatList, Image, Button} from 'react-native';
import { FontAwesome } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from "./style";
import quizItem from "../homeList/index"
import PesquisaItems from "./pesquisaItems";

const itens = [
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

export default function Pesquisa({navigation, route}) {
    
  
    const pesquisaInicial = () => {if(route.params?.input){
      return route.params.input
    } else {
      return null
    };}

    const [pesquisa, setPesquisa] = useState(pesquisaInicial)   
    const [data, setData] = useState(null) 
    const [dataLenght, setDataLenght] = useState(0)
    const [alterou, setAlterou] = useState(true)
    
    function pesquisar(){
        if (pesquisa !== null && pesquisa != '') {
            let Lista = [];
            for (let x in itens){
                if (itens[x].title.trim().toLowerCase().includes(pesquisa.toLowerCase().trim())){
                    Lista.push(itens[x])
                }
            };
            if (Lista.length == 0){
              setDataLenght(-1)
            } else {
              setDataLenght(Lista.length)
              };
            setData(Lista);         
        } else {
            setData(null)
            setDataLenght(0)
        }
    };

    useEffect(() => {
      pesquisar();
      if (alterou){
        setAlterou(false)
      }
    }, [alterou]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity 
            onPress={() => {setPesquisa(null); navigation.goBack()}}
            style={styles.goBackButton}>
            <FontAwesome name='chevron-left' size={20}/>
            </TouchableOpacity>
            <TextInput style={styles.pesquisa} keyboardType='default' placeholder='Digite sua pesquisa aqui...'
            onChangeText={setPesquisa}
            value={pesquisa}>
              
            </TextInput>
            <View style={styles.searchButton}>
            <TouchableOpacity onPress={() => {pesquisar()}} ><FontAwesome name="search" size={15}/></TouchableOpacity>
            </View>
            {(!data)?
            (<><Text style={styles.pesquisaTitle}>Comece a pesquisar...</Text>
            <Text style={styles.pesquisaSubTitle}>Digite um termo de busca para pesquisar todos os quizzes disponíveis no aplicativo!</Text></>) :
            <Text style={styles.result}>{dataLenght >= 0? (dataLenght + ' Results'): ''}</Text> 
            }
            </View>
            <View style={styles.content}>
            {data ?(
                <FlatList
                  style={styles.listaQuiz}
                  data={data}
                  renderItem={({item})=>{
                      return <TouchableOpacity onPress={() => navigation.navigate('QuizDetail',
                      {
                        image: item.image,
                        title: item.title,
                        description: item.description,
                        tag: item.tag
                      })}><PesquisaItems image={item.image} title={item.title} description={item.description} tag={item.tag}/>
                      </TouchableOpacity>
                    }}
                />
            ) : <View></View>
            }{dataLenght == -1 ?(
              <View><Image style={styles.notFoundImage} source={require('../../img/notFound.png')}/><Text style={styles.notFoundTitle}>Quiz não encontrado</Text>
              <Text  style={styles.notFoundText}>Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes...</Text></View>
            ) : <View></View>
            } 
            </View>
        
        </View>
        
    );
}