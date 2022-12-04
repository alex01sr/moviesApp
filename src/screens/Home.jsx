import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {colores, tamaño_texto, theme} from '../theme/appTheme';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {agregarUsuario} from '../../redux/actions';
import CardCategoria from '../components/CardCategoria';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import CardCarousel from '../components/CardCarousel';
import CardSimple from '../components/CardSimple';
import movieDB from '../api/movieDb';
import {useMovies} from '../hooks/useMovies';
import ScrollMovies from '../components/ScrollMovies';
const categorias = ['Todas', 'Accion', 'Comedia', 'Terror'];

export default function Home() {
  const {perfil, usuarios} = useSelector(state => state);
  const {actuales, populares, recomendadas, isLoading} = useMovies();
  const {urlImages} = useSelector(state => state);

  console.log(usuarios);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.home}>
          <Text style={theme.title}>Hola, {perfil.nombre}</Text>
          <View style={styles.boxCategorias}>
            <ScrollView
              horizontal
              style={styles.scrollHome}
              showsHorizontalScrollIndicator={false}>
              {categorias.map((categoria, index) => {
                return <CardCategoria key={index} categoria={categoria} />;
              })}
            </ScrollView>

            <Icon
              name="filter-outline"
              size={heightPercentageToDP(3)}
              color="white"
            />
          </View>
          {isLoading ? (
            <ActivityIndicator
              color={colores.secondary}
              size={heightPercentageToDP(5)}
            />
          ) : (
            <Carousel
              loop
              width={widthPercentageToDP(100)}
              height={heightPercentageToDP(30)}
              autoPlay={true}
              data={actuales}
              scrollAnimationDuration={1500}
              renderItem={movie => (
                <CardCarousel movie={movie.item} url={urlImages} />
              )}
            />
          )}
          <ScrollMovies
            title="Popular"
            sizeTitle={heightPercentageToDP(2.8)}
            movies={populares}
            url={urlImages}
            width={45}
          />
          <ScrollMovies
            title="Recomendadas"
            sizeTitle={heightPercentageToDP(2.8)}
            movies={recomendadas}
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
  home: {
    marginTop: heightPercentageToDP(5),
    width: widthPercentageToDP(90),
  },
  boxCategorias: {
    marginTop: heightPercentageToDP(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollHome: {
    maxWidth: widthPercentageToDP(80),
  },
});
