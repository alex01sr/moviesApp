import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colores, tamaño_texto} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Guardar from './Guardar.jsx';
export default function CardSearch({
  movie = {title: '', backdrop_path: '', vote_average: '', id: ''},
}) {
  const {urlImages} = useSelector(state => state);
  const {backdrop_path, title, vote_average, id} = movie;
  const uri = `${urlImages}w300${backdrop_path}`;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PeliculaDetalles', {id})}
      style={styles.container}>
      <Image
        style={styles.imagen}
        source={backdrop_path ? {uri} : require('../../assets/placeholder.png')}
      />
      <View style={styles.boxTitle}>
        <Text adjustsFontSizeToFit numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        {/*   <Text style={styles.caract}>Eng | Fiction | 2h10m</Text> */}
        <View style={styles.rat}>
          <Icon name="star" size={heightPercentageToDP(2)} color="#FFD261" />
          <Text style={styles.title}>{`${vote_average}`.slice(0, 3)}</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <Guardar movie={{backdrop_path, title, vote_average, id}} />
        <View style={styles.play}>
          <Icon
            name="play"
            size={heightPercentageToDP(3)}
            color={colores.secondary}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: heightPercentageToDP(2),
    flexDirection: 'row',
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(18),
    backgroundColor: '#ffffff30',
    borderRadius: 22,
    justifyContent: 'space-between',
    padding: heightPercentageToDP(2),
  },
  imagen: {
    width: widthPercentageToDP(35),
    borderRadius: 25,
    height: widthPercentageToDP(30),
    resizeMode: 'cover',
    opacity: 0.8,
  },
  title: {
    fontFamily: 'Roboto-Light',
    fontSize: tamaño_texto.medium,
    color: '#fff',
  },
  caract: {
    color: '#A5A5A530',
  },
  boxTitle: {
    /*   marginLeft: widthPercentageToDP(2), */
    width: widthPercentageToDP(30),
    height: widthPercentageToDP(30),
    justifyContent: 'space-between',
  },
  rat: {
    backgroundColor: '#ffffff20',
    flexDirection: 'row',
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(13),
    padding: heightPercentageToDP(0.5),
    justifyContent: 'space-around',
    borderRadius: 17,
    alignItems: 'center',
  },
  icons: {
    alignItems: 'center',
    height: widthPercentageToDP(30),
    justifyContent: 'space-between',
  },
  play: {
    borderRadius: 100,

    height: heightPercentageToDP(4),
    width: heightPercentageToDP(4),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
