import React, { Component } from 'react';
import { Image, View, Text, StyleSheet,ScrollView,SafeAreaView,StatusBar,Dimensions} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Paso1 = () => {
    
    const data = {
      Titulo: "1.- INSTALA NODE",
      Paso:"Si no tienes instalado Node, es una herramienta imprescindible, ya que vamos a utilizar el gestor de paquetes de Node (npm) para realizar la instalación. Puedes descargarlo desde su página principal. Si ya lo tienes instalado comprueba que tienes una versión superior a la 6 usando este comando en tu terminal.",
     

};  


return (
     
    <View >
        <SafeAreaView style={styles.container}>
        
        <Text style={styles.baseText}><Text style={styles.innerText}>  Pasos:</Text></Text>
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
 
export default Paso1;