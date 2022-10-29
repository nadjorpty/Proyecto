import React from "react";
import { Image, View, Text, StyleSheet, ImageBackground} from "react-native";
import Animals from "./src/Taller1/Animals";



const App = () => (
  <View >
    
    <ImageBackground source={require('./img/istockphoto-455588681-612x612.jpg')} resizeMode = "cover"
  style={{ width: 400, height: 600 }}>
  <Animals/>
  </ImageBackground>
  </View>
);

export default App;