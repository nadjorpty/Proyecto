import React, { Component } from 'react';
import { Image, View, Text, StyleSheet,ScrollView,SafeAreaView,StatusBar,Dimensions} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Lecciones = () => {
    
    const data = {
        Leccion1:"CSS no se va a utilizar en React Native",
        Leccion2:"El código JavaScript se ejecuta de manera nativa en una máquina virtual dentro de cada uno de los sistemas operativos",
        Leccion3:"Se pueden ejecutar librerías y código nativo desde React Native",
        Leccion4:"No es compatible con componentes de ReactJS, pero sí con librerías de JS",
        Leccion5:"JavaScript se ejecuta directamente sin transpilar a Java/ObjectiveC",


       
  
  };  


return (
     
    <View >
        <SafeAreaView style={styles.container}>
        
        <Text style={styles.baseText}><Text style={styles.innerText}>Lecciones:</Text></Text>
        <Text style={styles.scrollView}>{data.Leccion1}</Text>
        <Text style={styles.scrollView}>{data.Leccion2}</Text>
        <Text style={styles.scrollView}>{data.Leccion3}</Text>
        <Text style={styles.scrollView}>{data.Leccion4}</Text>
        <Text style={styles.scrollView}>{data.Leccion5}</Text>
        <Text style={styles.scrollView}>{data.Leccion6}</Text>
    
        
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
 
export default Lecciones;