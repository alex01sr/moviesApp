import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useMovieDetail} from '../hooks/useMovieDetail';
import {colores, tamaño_texto, theme} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import CardCast from '../components/CardCast';
import ScrollMovies from '../components/ScrollMovies';
import {useMovies} from '../hooks/useMovies';
import {useSelector} from 'react-redux';
export default function PeliculaDetalles({navigation, route}) {
  console.log(route.params.id);
  const {urlImages} = useSelector(state => state);

  const {
    detalles = {
      title: '',
      backdrop_path: '',
      overview: '',
      genres: [],
      vote_average: '',
    },
    videos,
    cast = [],
    similar = [],
    isLoading,
  } = useMovieDetail(route.params.id);

  const {title, backdrop_path, overview, genres} = detalles;

  const uri = `${urlImages}w780${backdrop_path}`;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.detalles}>
          <View style={styles.header}>
            <Icon
              name="arrow-back-outline"
              size={heightPercentageToDP(4)}
              color="white"
            />
            <Icon
              name="bookmark-outline"
              size={heightPercentageToDP(4)}
              color="white"
            />
          </View>
          {isLoading ? (
            <ActivityIndicator color={colores.secondary} />
          ) : (
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
              source={
                backdrop_path ? {uri} : require('../../assets/placeholder.png')
              }
            />
          )}

          <View style={styles.boxText}>
            <Text style={[theme.title, {fontSize: heightPercentageToDP(2.5)}]}>
              {title}
            </Text>

            <Text style={styles.textGeneros}>
              {genres?.slice(0, 3)?.map((el, i) => {
                return `${el.name} ${genres.length - 1 === i ? '' : '|'} `;
              })}
            </Text>
            <View style={styles.divider} />
          </View>
          <View style={styles.description}>
            <Text style={styles.subtitle}>Descripción</Text>
            <Text style={styles.textDescription}>{overview}</Text>
            <Text style={styles.subtitle}>Cast</Text>
          </View>
          <ScrollView
            horizontal
            style={styles.scrollSeccionUno}
            showsHorizontalScrollIndicator={false}>
            {cast?.slice(0, 5)?.map((cast, index) => {
              return <CardCast key={index} cast={cast} url={urlImages} />;
            })}
          </ScrollView>
          <ScrollMovies
            title="Similares"
            sizeTitle={heightPercentageToDP(2.8)}
            movies={similar}
            url={urlImages}
            width={35}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: heightPercentageToDP(15),
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
  boxText: {alignItems: 'center', marginTop: heightPercentageToDP(2)},
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
    textAlign: 'justify',
    fontFamily: 'Roboto-Regular',
    fontSize: tamaño_texto.medium,
    color: '#A5A5A580',
  },
});
