import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {BlurView} from '@react-native-community/blur';
import {colores, tamaño_texto} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovies} from '../hooks/useMovies';
import {useNavigation} from '@react-navigation/native';
export default function CardSimple({
  width = 50,
  movie = {title: '', backdrop_path: '', vote_average: '', id: ''},
  url,
}) {
  const {backdrop_path, title, vote_average, id} = movie;
  const navigation = useNavigation();
  const uri = `${url}w300${backdrop_path}`;

  const responsive = {
    container: {
      width: widthPercentageToDP(width),
      height: widthPercentageToDP(width),

      marginHorizontal: widthPercentageToDP(3),
      borderRadius: 25,
    },
    boxBlur: {
      position: 'absolute',

      left: widthPercentageToDP(2.5),
      right: widthPercentageToDP(2.5),
      width: widthPercentageToDP(width - 5),
      height: widthPercentageToDP(13),
      bottom: heightPercentageToDP(1),
    },
    play: {
      borderRadius: 100,
      height: heightPercentageToDP(width > 40 ? 5 : 2),
      width: heightPercentageToDP(width > 40 ? 5 : 2),
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      width: widthPercentageToDP(width - 20),
      fontFamily: 'Roboto-Medium',
      fontSize: width > 40 ? tamaño_texto.small : tamaño_texto.Esmall,
      color: '#fff',
    },
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PeliculaDetalles', {id})}
      style={responsive.container}>
      <Image
        style={{
          width: widthPercentageToDP(width),
          borderRadius: 25,
          height: widthPercentageToDP(width),
          resizeMode: 'cover',
          opacity: 0.8,
        }}
        source={backdrop_path ? {uri} : require('../../assets/placeholder.png')}
      />
      {/* La libreria de desenfoque no permite la propiedad borderRadius */}
      <BlurView
        blurRadius={1}
        blurType="dark"
        overlayColor=""
        blurAmount={100}
        style={styles.boxBlur}
      />

      <View style={[styles.box, responsive.boxBlur]}>
        <View>
          <Text adjustsFontSizeToFit numberOfLines={2} style={responsive.title}>
            {title}
          </Text>
          <View style={styles.rat}>
            <Icon
              name="star"
              size={heightPercentageToDP(width > 40 ? 2 : 1.5)}
              color="#FFD261"
            />
            <Text style={responsive.title}>{vote_average}</Text>
          </View>
        </View>
        <View style={responsive.play}>
          <Icon
            name="play"
            size={heightPercentageToDP(width > 40 ? 3 : 1)}
            color={colores.secondary}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ffffff25',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: heightPercentageToDP(0.5),
    paddingHorizontal: widthPercentageToDP(2),

    borderRadius: 20,
  },

  rat: {
    marginTop: heightPercentageToDP(1),
    flexDirection: 'row',
    width: widthPercentageToDP(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
