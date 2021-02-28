import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
  const {width: screenWidth} = Dimensions.get('window');
  const prueba = require('../assets/logo.png')
  
  const img= [{
      title: "Maldivas",
      illustration:'https://wallpapercave.com/wp/XpDxzYW.jpg',
  },
  {
      title: "New York",
      illustration:'https://images5.alphacoders.com/108/1081801.jpg',
  },
  {
      title: "Amsterdam",
      illustration:'https://i.pinimg.com/originals/bd/24/8a/bd248a4521e2277ea1be5ae6a64c6de0.jpg',
  },
  {
      title: "Berlin",
      illustration: 'https://images4.alphacoders.com/552/thumb-1920-552459.jpg',
  },
  {
      title: "Venecia",
      illustration:'https://wallpapercave.com/wp/w9DrSmA.jpg',
  }]
  const [imagen, setImagen] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setImagen(img);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.itemCarrousel}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainerCarrousel}
          style={styles.imageCarrousel}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };
  return (
    <ScrollView>
        <View style={styles.container}>
            <ImageBackground source={require('../assets/personas.jpg')} style={styles.image}>
                <ImageBackground source={prueba} style={styles.firstCont}>
                    <Text style={styles.texto}>MyTinerary</Text>
                </ImageBackground>
            </ImageBackground>
            <View style={styles.secCont}>
            <TouchableOpacity onPress={goForward}>
                    
                    </TouchableOpacity>
                    <Carousel
                      ref={carouselRef}
                      sliderWidth={screenWidth}
                      sliderHeight={screenWidth}
                      itemWidth={screenWidth - 100}
                      data={imagen}
                      renderItem={renderItem}
                      hasParallaxImages={true}
                    />
            </View>
            <View style={styles.botonCities}>
                  <Text style={styles.xd}  onPress={()=> navigation.navigate('Cities')}>GO CITIES</Text>
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:1300
  },
  image: {
    flex: 0.85,
    resizeMode: "contain",
    justifyContent: "flex-start",
    alignItems:"flex-end",
    width: Dimensions.get('window').width,
    paddingTop:"5%",
  },
  firstCont:{
    justifyContent:"center",
    resizeMode: "contain",
    marginTop:"3.5%",
    marginRight:"3%",
    width:"68.6%",
    height:"45.25%",
  },
  secCont:{
    flex:0.5,
    marginTop:"-5%",
    backgroundColor:"whitesmoke"
  },
  texto: {
    fontSize: 32,
    fontWeight:"bold",
    color: "rgb(253, 142, 122)",
    marginLeft:"-1%",
    marginTop:"6%"
  },

  itemCarrousel: {
    width: '100%',
    height: '60%',
  },
  imageContainerCarrousel: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  imageCarrousel: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
xd:{
    color: 'black'
},
botonCities:{
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    height:50,
    marginTop:"-32%",
    marginBottom:50,
    width:'40%',
    borderRadius:25,
    borderWidth: 3,
    borderColor:'rgb(253, 142, 122)'
  },
});
