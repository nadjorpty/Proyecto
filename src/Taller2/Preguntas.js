import React, { Component } from 'react';
import { Image, View, Text, StyleSheet,ScrollView,SafeAreaView,StatusBar,Dimensions} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Preguntas = () => {
    
    const data = {
        Pregunta1:"¿La diferencia entre utilería y estado?",
        Pregunta2:"¿Conoce el ciclo de vida de react-native?",
        Pregunta3:"¿Cómo interactúan el componente principal react-native y los componentes hermanos?",
        Pregunta4:"¿Dónde están escritos los componentes de react-native?",
        Pregunta5:"¿Ha utilizado alguna vez la animación? ¿Cuánto sabes de animación?",


       
  
  };  


return (
     
    <View >
        <SafeAreaView style={styles.container}>
        
        <Text style={styles.baseText}><Text style={styles.innerText}>Preguntas:</Text></Text>
        <Text style={styles.scrollView}>{data.Pregunta1}</Text>
        <Text style={styles.scrollView}>{data.Pregunta2}</Text>
        <Text style={styles.scrollView}>{data.Pregunta3}</Text>
        <Text style={styles.scrollView}>{data.Pregunta4}</Text>
        <Text style={styles.scrollView}>{data.Pregunta5}</Text>

    
        
        </SafeAreaView>
       
    </View>
)

};

const styles = StyleSheet.create({
    container: {
      justifyContent: "space-around",
      alignItems: "center",

    },
    scrollView: {
    marginVertical: 5,
    marginHorizontal: 5,
    textAlign: "center"
    },
    baseText: {
      fontWeight: 'bold',
      color: 'azure ',
      textAlign: "center"
    },
    innerText: {
      color: 'azure '
    }
  });
 
export default Preguntas;