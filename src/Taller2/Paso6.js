import React, { Component } from 'react';
import { Image, View, Text, StyleSheet,ScrollView,SafeAreaView,StatusBar,Dimensions} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Paso6 = () => {
    
    const data = {
      Titulo: "6.- LANZA TU APLICACIÓN EN EL SIMULADOR",
      Paso:"Para ver tu aplicación en el simulador necesitarás las herramientas de desarrollo, por ejemplo, XCode para iOS y las Android Build Tools para usar el simulador de Android. Para ello solo tienes que utilizar alguno de estos comandos: npm run ios o npm run android. Y nada más. Ahora toca lo más divertido, comenzar a crear tu app. Como puedes ver no puede ser más sencillo y rápido comenzar tu proyecto en React Native."
     

};  


return (
     
    <View >
        <SafeAreaView style={styles.container}>
        
        
        <Text style={styles.scrollView}><Text style={styles.innerText}> {data.Titulo}</Text></Text>
        <Text style={styles.scrollView}>{data.Paso}</Text>
    
        
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
 
export default Paso6;