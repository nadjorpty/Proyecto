import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,ScrollView, ImageBackground} from 'react-native';
import Encabezado from "./src/Taller2/Encabezado";
import Lecciones from "./src/Taller2/Lecciones";
import Preguntas from "./src/Taller2/Preguntas";
import Paso1 from "./src/Taller2/Paso1";  
import Paso2 from "./src/Taller2/Paso2";
import Paso3 from "./src/Taller2/Paso3";
import Paso4 from "./src/Taller2/Paso4";
import Paso5 from "./src/Taller2/Paso5";
import Paso6 from "./src/Taller2/Paso6";

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <ScrollView>
  <SafeAreaView style={styles.container}>
  <View>
    <Encabezado/>
    <Paso1/>
    <Paso2/>
    <Paso3/>
    <Paso4/>
    <Paso5/>
    <Paso6/>
    <Lecciones/>
    <Preguntas/>
    </View>
    <View>
      <Text style={styles.title}>
      
      </Text>
      <View style={styles.fixToText}>
      
      </View>
    </View>
  </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;