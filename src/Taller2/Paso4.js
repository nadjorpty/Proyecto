import React, { Component } from 'react';
import { Image, View, Text, StyleSheet,ScrollView,SafeAreaView,StatusBar,Dimensions} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Paso4 = () => {
    
    const data = {
      Titulo: "4.- COMPRUEBA EL DIRECTORIO CREADO",
      Paso:"Una vez que se ha completado la instalación tendrás una app lista para comenzar a codear. Puedes entrar al directorio para comprobar todos los archivos creados. cd mi-nueva-app/",
     

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
 
export default Paso4;