import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colores, tamaño_texto} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function CardCarousel({movie, url}) {
  const {backdrop_path, title, vote_average, id} = movie;
  const uri = `${url}w780${backdrop_path}`;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PeliculaDetalles', {id})}
      style={{
        width: widthPercentageToDP(90),
        height: heightPercentageToDP(25),
        borderRadius: 50,

        alignItems: 'center',
      }}>
      <Image
        style={{
          borderRadius: 50,
          width: widthPercentageToDP(90),
          height: heightPercentageToDP(25),
          resizeMode: 'contain',
          marginHorizontal: widthPercentageToDP(2),
          opacity: 0.7,
        }}
        source={{uri}}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rat}>
        <Icon name="star" size={heightPercentageToDP(2)} color="#FFD261" />
        <Text style={styles.titleStar}>{vote_average}</Text>
      </View>
      <View style={styles.play}>
        <Icon
          name="play"
          size={heightPercentageToDP(5)}
          color={colores.secondary}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: tamaño_texto.medium,
    color: '#fff',
    position: 'absolute',
    bottom: heightPercentageToDP(10),
    left: widthPercentageToDP(5),
  },
  rat: {
    marginTop: heightPercentageToDP(1),
    flexDirection: 'row',
    position: 'absolute',
    bottom: heightPercentageToDP(4),
    left: widthPercentageToDP(5),
    width: widthPercentageToDP(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStar: {
    fontFamily: 'Roboto-Medium',
    fontSize: tamaño_texto.small,
    color: '#fff',
  },
  play: {
    borderRadius: 100,
    position: 'absolute',
    bottom: heightPercentageToDP(5),
    right: widthPercentageToDP(5),
    height: heightPercentageToDP(7),
    width: heightPercentageToDP(7),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
