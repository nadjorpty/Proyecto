import React, { Component } from 'react';
import { Image, View, Text, StyleSheet,ScrollView,SafeAreaView,StatusBar,Dimensions} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Paso5 = () => {
    
    const data = {
      Titulo: "5.- LANZA TU PROYECTO",
      Paso:"Para lanzar tu proyecto, tan solo tienes que utilizar el siguiente comando y se creará un servidor local que además puedes conectar a tu teléfono gracias a un QR que se genera y que puedes utilizar con la App Expo: npm start"
     

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
 
export default Paso5;