import React, { Component } from 'react';
import { Image, View, Text, StyleSheet,ScrollView,SafeAreaView,StatusBar,Dimensions} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Paso3 = () => {
    
    const data = {
      Titulo: "3.- CREA TU PROYECTO Y DALE UN NOMBRE A TU APP",
      Paso:"Una vez instalado, solo tienes que crear tu proyecto dándole un nombre.  create-react-native-app mi-nueva-app",
     

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
 
export default Paso3;