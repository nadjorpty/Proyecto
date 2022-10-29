import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,ScrollView} from 'react-native';
import APIA from "./src/Parcial1/APIA";
import APIB from "./src/Parcial1/APIB";
import APIC from "./src/Parcial1/APIC";
import APID from "./src/Parcial1/APID";
import APIE from "./src/Parcial1/APIE";
import APIF from "./src/Parcial1/APIF";

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <ScrollView>
  <SafeAreaView style={styles.container}>
  <View>
    <APIA/>
      <Button
        title="Contactar"
        color="#f194ff"
        onPress={() => Alert.alert('Se ha contactado con Rahul')}
      />
    </View>
    <Separator />
    <View>
    <APIB/>
      <Button
        title="Contactar"
        color="#f194ff"
        onPress={() => Alert.alert('Se ha contactado con Theresa')}
      />
    </View>
    <Separator />
    <View>
    <APIC/>
      <Button
        title="Contactar"
        color="#f194ff"
        onPress={() => Alert.alert('Se ha contactado con Johnny')}
      />
    </View>
    <Separator />
    <View>
    <APID/>
      <Button
        title="Contactar"
        color="#f194ff"
        onPress={() => Alert.alert('Se ha contactado con Jazlyn')}
      />
    </View>
    <Separator />
    <View>
    <APIE/>
      <Button
        title="Contactar"
        color="#f194ff"
        onPress={() => Alert.alert('Se ha contactado con Leonora')}
      />
    </View>
    <Separator />
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