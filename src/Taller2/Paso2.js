import React, { Component } from 'react';
import { Image, View, Text, StyleSheet,ScrollView,SafeAreaView,StatusBar,Dimensions} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Paso2 = () => {
    
    const data = {
      Titulo: "2.- INSTALA CREATE REACT NATIVE APP VÍA NPM",
      Paso:"Para instalar el nuevo «create native app» utiliza el flag global (-g) y si al ejecutar npm te da error por permisos (Error: EACESS permission denied) ejecuta este comando utilizando «sudo» delante de npm (te pedirá contraseña de administrador).",
     

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
 
export default Paso2;