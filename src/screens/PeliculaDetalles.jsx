import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useMovieDetail} from '../hooks/useMovieDetail';
import {colores, tamaño_texto, theme} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
export default function PeliculaDetalles({navigation, route}) {
  console.log(route.params.id);
  const {detalles, videos, cast} = useMovieDetail(route.params.id);

  console.log(videos);

  return (
    <View style={styles.container}>
      <View style={styles.detalles}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-outline"
            size={heightPercentageToDP(5)}
            color="white"
          />
          <Icon
            name="bookmark-outline"
            size={heightPercentageToDP(5)}
            color="white"
          />
        </View>
        <Image
          style={{
            marginTop: heightPercentageToDP(2),
            borderRadius: 50,
            width: widthPercentageToDP(90),
            height: heightPercentageToDP(30),
            resizeMode: 'cover',
            marginHorizontal: widthPercentageToDP(2),
            opacity: 0.7,
          }}
          source={require('../../assets/pelicula.png')}
        />
        <View style={styles.boxText}>
          <Text style={[theme.title, {fontSize: heightPercentageToDP(2.5)}]}>
            Captain America: Civil Wa{' '}
          </Text>
          <Text style={styles.textGeneros}> Eng | Action | 2h10m</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.description}>
          <Text style={styles.subtitle}>Story line</Text>
          <Text style={styles.textDescription}>
            Political involvement in the Avengers' affairs causes a rift between
            Captain America and Iron Man. With many people fearing the actions
            of super heroes, the government decides to push for the Hero
            Registration Act, a law that limits a hero's actions. This results
            in a division in The Avengers.
          </Text>
          <Text style={styles.subtitle}>Star cast </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  detalles: {
    marginTop: heightPercentageToDP(5),
    width: widthPercentageToDP(90),
    alignItems: 'center',
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: tamaño_texto.medium,
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    width: widthPercentageToDP(90),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxText: {alignItems: 'center'},
  textGeneros: {
    fontFamily: 'Roboto-Light',
    fontSize: tamaño_texto.medium,
    color: '#A5A5A580',
  },
  divider: {
    marginTop: heightPercentageToDP(2),
    height: 1,
    width: widthPercentageToDP(70),
    backgroundColor: '#A5A5A580',
  },
  description: {
    marginTop: heightPercentageToDP(2),
    alignSelf: 'flex-start',
  },
  textDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: tamaño_texto.medium,
    color: '#A5A5A580',
  },
});
