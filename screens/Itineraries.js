import {TouchableHighlight,ScrollView,Button,Text, View, Image, ImageBackground } from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const fondo = require('../assets/fotoGrande2.jpg')

const noItineraries = require('../assets/imagenGeneral2.jpg')
const boy = require('../assets/hombrecito.png')
const girl= require('../assets/icono2.png')

const Itineraries =(props) => {
const [itineraries, setItineraries] = useState([])
const cityId = props.route.params.idCity

useEffect(()=> {
    fetch('https://alcalde-mytinerary.herokuapp.com/api/itineraries/'+cityId)
    .then(res => res.json())
    .then(data => setItineraries(data.response))
},[])
    return(
        <View style={styles.cajaPadreCities}>
            <ImageBackground style={styles.fondoCiudades} source={fondo}>
                <ScrollView style={styles.dont}>           
                    <ImageBackground source={{uri: `${props.route.params.cityPic}`}} style={styles.          imagenCiudad}>      
                    </ImageBackground>
                    <View style={styles.prueba}>
                        <Text style={styles.tituloCiudad}>{props.route.params.cityName}</Text>
                    </View>
                    {(itineraries.length === 0) ? <ImageBackground source={noItineraries} style={styles.imagenOops}><Text style={{backgroundColor:"rgba(231, 145, 114, 0.836))",width:"100%", textAlign:"center", paddingBottom:"2%", paddingTop:"2%",color:"white"}}>Oops! We don't have itineraries yet. Make one!</Text></ImageBackground> : itineraries.map(itinerary => (      
                                <View  style={styles.cajaMap}>           
                                
                                    <View style={styles.cajaTitulo}>
                                        <Text style={styles.textoTitulo}>{itinerary.tittle}</Text>
                                    </View>
                                        {itinerary.activities.map(activity => (
                                            <View style={styles.contenedorActividades}>
                                                <View style={styles.textoActividad}>
                                                    <Text style={styles.tipoActividades}>{activity.actTittle}</Text>
                                                        
                                                </View>
                                                <View style={styles.contenedorFotos}>
                                                    <Image style={styles.fotoActividad} source={{uri: `${activity.actImg}`}}/>
                                                </View>
                                            </View>
                                        ))}
                                        <View style={styles.cajaTitulo}>
                                            <Text style={styles.textoInformation}>ABOUT THIS ITINERARY</Text>
                                        </View>
                                        <View style={styles.textoActividad}>
                                            <Text style={styles.userName}>{itinerary.userName}</Text>
                                            {itinerary.userName === "travelerBoy" ? <Image style={styles.fotoUser} source={boy}/>: itinerary.userName === "travelerGirl"?<Image style={styles.fotoUser} source={girl}/>: <Image style={styles.fotoUser} source={{uri: `${itinerary.userImg}`}}/>}
                                        </View>
                                        <View style={styles.cajaInfoUser}>
                                            <Text style={styles.info}>Hours: {itinerary.hours}</Text>
                                            <Text style={styles.info}>Price: {Array(itinerary.price).fill('$')}</Text>
                                        </View>
                                        
                                </View>
                    ))}
                    <View style={{width:"100%",alignItems:"center"}}>
                        <View style={styles.botoncito}>
                            <Text style={styles.xd}  onPress={()=> props.navigation.navigate('Home')}>Back to Home</Text>
                        </View>  
                    </View>      
                </ScrollView>  
            </ImageBackground>       
        </View>
    )
}
const styles ={
    textCategoria:{
        fontWeight: 'bold',
        backgroundColor:'black',
        paddingLeft:10,
        paddingRight:10,
        color:'violet',
        borderColor:'white',
        borderWidth: 1,
        borderRadius:25,
    },
    /* test:{
        height:200,
        width:200
    }, */
    imagenOops:{
        height:150,
        width:'100%',
        marginTop:"5%",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"10%"  
    },

    tipoActividades:{
        marginBottom:"3%",
        textTransform:'uppercase',
        fontWeight:'bold',
        color:'rgb(66, 90, 143)',
        textAlign:"center"
    },
    cajaInfoUser:{
        flexDirection:'row',
        justifyContent:'center'
    },
   cajaMap:{
       marginBottom:"10%",
       paddingTop:20,
       width:'100%',
       alignItems:'center',
       paddingBottom:'12%',
       /* backgroundColor:"rgba(228, 178, 158, 0.795))" */
   },
    cajaHashtags:{
        flexDirection:'row',
        paddingTop:10
    },
    info:{
        fontSize: RFValue(18, 580),
        marginLeft:20,
        marginTop:20,
        fontWeight:'bold',
        textTransform:'uppercase',
        paddingLeft:10,
        paddingRight: 10 ,
        borderColor:'rgb(66, 90, 143)',
        borderRadius:25,
        borderWidth: 2,
        color:'white',
        backgroundColor:'rgb(115, 143, 202)',
    },
    userName:{
        fontSize: RFValue(18, 580),
        backgroundColor:'violet',
        textTransform:'uppercase',
        fontWeight:'bold',
        marginTop:20,
        color:'white',
        backgroundColor:'rgb(115, 143, 202)',
        borderRadius:25,
        borderWidth: 1,
        paddingLeft:10,
        paddingRight: 10 ,
        borderColor:'rgb(66, 90, 143)',
        borderRadius:25,
        borderWidth: 2,  
    },
    textoInformation:{
        fontSize: RFValue(17, 580),
        color:'white',
        fontWeight: 'bold'
    },
    textoTitulo:{
        fontSize: RFValue(18, 580),
        fontWeight: 'bold',
        textTransform:'capitalize',
        alignItems:'center',
        color:'white', 
    },
    cajaTitulo:{
        alignItems:'center',
        borderColor:'rgb(231, 145, 114)',  
        borderWidth: 2,
        width:'100%',
        backgroundColor:'rgb(250, 193, 173)',
    },
    textoActividad:{
        alignItems:'center'
    },
    fotoUser:{  
        width:200,
        height:200,
        marginTop:15,
        borderRadius:25,
        borderWidth: 1,
    },
    cajaCategorias:{  
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingTop:5,
    }, 
    contenedorActividades:{
        width:'80%',
        marginTop:20,
        marginBottom:20
    },
    fotoActividad:{  
        height:180,
        marginBottom:10,
        borderRadius:25,
        borderWidth: 1,
    },
    prueba:{
        borderRadius:6,
        backgroundColor:'rgb(103, 132, 194)',
        alignItems:'center',
        marginBottom:"2%",
    },
    tituloCiudad:{
        color:'white',
        borderRadius:20,
        textTransform:'capitalize',
        fontSize: RFValue(25, 580),
        fontWeight: 'bold',
    },
    imagenCiudad:{
        width:'100%',
        height:300,  
    },
    
    cajaPadreCities:{
        flex: 1,  
    },
    fondoCiudades: {
        flex: 1,
        backgroundColor:'yellow',
        resizeMode: 'cover',
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
        marginTop:"-6%",
        marginBottom:50,
        width:'50%',
        borderRadius:15,
        borderWidth: 3,
        borderColor:'rgb(253, 142, 122)'
      },
      
}
export default Itineraries