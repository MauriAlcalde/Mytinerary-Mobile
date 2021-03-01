import React, {useRef, useState, useEffect} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {TouchableHighlight,ScrollView,Button,Text, View, Image, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Cities =(props) => {
    const fondoCities = require('../assets/fotoGrande2.jpg')
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
                <TouchableOpacity key={city._id + city.name} onPress={() => props.navigation.navigate("Itineraries",{idCity: city._id, cityPic: city.src, cityName: city.name})}>
                    <View style={styles.pruebaaa} key={city._id}>                    
                        <Text key={city._id + city.name + city.name} style={styles.nombreCiudad}>{city.name}</Text>        
                        <Image key={city._id + city.name} style={styles.fotoCiudad} source={{uri:`${city.src}`}}/>               
                    </View>
                </TouchableOpacity>
                ))}
                </ScrollView> 
                <View style={{width:"100%",alignItems:"center"}}>
                        <View style={styles.botoncito}>
                            <Text style={styles.xd}  onPress={()=> props.navigation.navigate('Home')}>Back to Home</Text>
                        </View>  
                    </View>   
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
        alignItems:"center",
        justifyContent:"center",
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
        color:'rgb(103, 132, 194)',
        fontWeight:"600",
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
    },
    xd:{
        color: 'rgb(103, 132, 194)',
        fontWeight:"bold",
        fontSize:20
    },
    botoncito:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        marginTop:"4%",
        marginBottom:"4%",
        width:'50%',
        borderRadius:15,
        borderWidth: 3,
        borderColor:'rgb(253, 142, 122)'
      },
})

export default Cities
