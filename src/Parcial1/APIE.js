import React, { Component } from 'react';
import { Image, View, Text, StyleSheet,ScrollView,SafeAreaView,StatusBar,Dimensions} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const APIE = () => {
    
    const data = {
      id:5,
      firstname:"Leonora",
      lastname:"BeBaumbacher",
      email:"kamren11@hotmail.com",
      phone:"+2769299666582",
      birthday:"1956-02-20",
      gender:"female",
    //address
        ida:0,
        street:"517 Ole Cliff Suite 214",
        streetName:"Quigley Centers",
        buildingNumber:"7788",
        city:"Hillsview",
        zipcode:"39135-3505",
        country:"Rwanda",
        county_code:"RE",
        latitude:47.645896,
        longitude:-3.705266,
        website:"http:.gleichner.com",
        image:"http:placeimg.com/640/480/people"

};  


return (
     
    <View >
        <SafeAreaView style={styles.container}>
        
        <Text style={styles.baseText}><Text style={styles.innerText}>  ID:</Text></Text>
        <Text style={styles.scrollView}><Text style={styles.innerText}> {data.id}</Text></Text>
        <Text style={styles.baseText}> LAST NAME:</Text>
        <Text style={styles.scrollView}>{data.firstname}</Text>
        <Text style={styles.baseText}> FRIST NAME:</Text>
        <Text style={styles.scrollView}>{data.lastname}</Text>
        <Text style={styles.baseText}> EMAIL:</Text>
        <Text style={styles.scrollView}>{data.email}</Text>
        <Text style={styles.baseText}>BIRTHDAY:</Text>
        <Text style={styles.scrollView}>{data.birthday}</Text>
        <Text style={styles.baseText}> GENDER:</Text> 
        <Text style={styles.scrollView}>{data.gender}</Text>
        <Text style={styles.baseText}> ADDRESS:</Text>
        <Text style={styles.scrollView}>ID:{data.ida}, Street:{data.street} ,StreetName:{data.streetName} ,BuildingNumber:{data.buildingNumber} ,City:{data.city} ,Zipcode:{data.zipcode} ,Country:{data.country} ,CountyCode:{data.county_code} ,Latitude:{data.latitude},Longitude: {data.longitude}</Text>
        <Text style={styles.baseText}> WEBSITE:</Text>
        <Text style={styles.scrollView}>{data.website}</Text>
        <Image source={{ uri:data.image}} style = {{width: 200, height: 200}}/>
       
        
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
 
export default APIE;