import React from 'react';
import { Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from "../intro/style"
import {TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler'

const slides = [
  {
    key: 's1',
    title: 'Aprenda a qualquer hora e \nem qualquer lugar',
    text: 'Tenha em suas mãos perguntas sobre os mais \nvariados assuntos e aprenda errando!',
    image: require('../img/intro1.png'),
    backgroundColor: '#fff',
  },
  {
    key: 's2',
    title: 'Diversos assuntos \npara você',
    text: 'São vários quizes diferentes para você. Escolha \num e se aventure!',
    image: require('../img/intro2.png'),
    backgroundColor: '#fff',
  },
  {
    key: 's3',
    title: 'Melhore suas habilidades',
    text: 'Memorize os conteúdos do aplicativo e melhore suas habilidades!',
    image: require('../img/intro3.png'),
    backgroundColor: '#fff',
  },
];





export default function Intro(props) {

  const pular = props.pular

  const onDone = () => {
    pular();
  };

  const onSkip = () => {
    pular();
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
         <Text style={styles.buttonText}>Vamos lá!</Text>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={styles.skipButtonCircle} >
        <TouchableOpacity  onPress={pular}><Text style={styles.skipButtonText}>Skip</Text></TouchableOpacity>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
       <Text style={styles.buttonText}>Avançar</Text>
      </View>
    );
  };  
  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          width: 'auto',
          height: '10%',
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          position: 'absolute',
          top: 200,
          alignSelf: 'center',
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
        
      </View>
    );
  };

  return (
    <>
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          renderNextButton={renderNextButton}
          renderSkipButton={renderSkipButton}
          renderDoneButton={renderDoneButton}
          dotStyle={{backgroundColor: '#D5D4D4', bottom: 76}}
          activeDotStyle={{backgroundColor: '#65AAEA', bottom: 76, width: 16}}
          onDone={onDone}
          onSkip={onSkip}
          showSkipButton={true}
          showNextButton={true}
          showDoneButton={true}
          bottomButton={true}
        />
       
    </>
      );
  
}

