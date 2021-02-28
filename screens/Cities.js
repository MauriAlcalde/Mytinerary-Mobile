import React, {useRef, useState, useEffect} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {TouchableHighlight,ScrollView,Button,Text, View, Image, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const fondoCities = require('../assets/fotoGrande2.jpg')

const Cities =(props) => {
    const [cities, setCities] = useState([])
    useEffect(()=> {
        fetch('https://alcalde-mytinerary.herokuapp.com/api/cities')
        .then(res => res.json())
        .then(data => setCities(data.response))
    },[])

return(

    <View style={styles.cajaPadreCities}>
        <ImageBackground source={fondoCities} style={styles.fondoCiudades}>
            <View style={{marginTop:"8%", paddingBottom:"3%"}}>
                <Text style={styles.tituloCities}>Cities</Text>
            </View>
            <View style={styles.cajaContenedorCities} >
                <ScrollView >
                    {cities.map(city => (
                <TouchableOpacity onPress={() => props.navigation.navigate("Itineraries",{idCity: city._id, cityPic: city.src, cityName: city.name})}>
                    <View style={styles.pruebaaa} key={city._id}>                    
                        <Text style={styles.nombreCiudad}>{city.name}</Text>        
                        <Image style={styles.fotoCiudad} source={{uri:`${city.src}`}}/>               
                    </View>
                </TouchableOpacity>
                ))}
                </ScrollView>   
            </View>
        </ImageBackground>
    </View>
)
}
const styles = StyleSheet.create({
    tituloCities:{
        fontSize:30,
        fontWeight:"bold",
        color:"rgb(253, 142, 122)",
    },
    cajaContenedorCities:{
        marginTop:"-4%",
        paddingBottom:"25%"
    },
    fondoCiudades:{
        flex: 1,
        resizeMode:'cover',
        alignItems:'center',
        width:'100%'
    },
    pruebaaa:{     
        alignItems:'center'  
    },
    nombreCiudad:{    
        marginTop:"5%",
        marginBottom:"1%",
        color:'black',
        fontSize: RFValue(20, 580),
    },
    fotoCiudad: {
        width: 350,
        height: 250,
        borderRadius:45,
        borderWidth: 1,
      },
    cajaPadreCities:{
        flex: 1,
        alignItems:'center',   
    }
})

export default Cities
