import React, { Component } from 'react';
import { Image, View, Text, StyleSheet,ScrollView,SafeAreaView,StatusBar,Dimensions} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const APIB = () => {
    
    const data = {
      id:2,
      firstname:"Theresa",
      lastname:"Gleichner",
      email:"paige60@koss.com",
      phone:"+7201249632316",
      birthday:"1943-10-06",
      gender:"female",
    //address
        ida:0,
        street:"41545 Boyer Rue",
        streetName:"Witting Mountains",
        buildingNumber:"55276",
        city:"Watsicaview",
        zipcode:"19858",
        country:"Lesotho",
        county_code:"LB",
        latitude:46.120694,
        longitude:166.980321,
        website:"http:labadie.com",
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
 
export default APIB;