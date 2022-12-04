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
const categorias = ['Todas', 'Accion', 'Comedia', 'Terror'];

export default function Home() {
  const {usuarios} = useSelector(state => state);
  const {actuales, populares, recomendadas, isLoading, configuration} =
    useMovies();

  /* const {secure_base_url = ''} = configuration; */
  const dispatch = useDispatch();

  console.log(configuration?.secure_base_url);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.home}>
          <Text style={theme.title}>Hola, Alexander</Text>
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
                <CardCarousel
                  movie={movie.item}
                  url={configuration?.secure_base_url}
                />
              )}
            />
          )}

          <View style={styles.seccionUno}>
            <Text style={[theme.title, {fontSize: heightPercentageToDP(2.8)}]}>
              Popular
            </Text>
            <Icon
              name="ellipsis-horizontal"
              size={heightPercentageToDP(4)}
              color={colores.secondary}
            />
          </View>
          <ScrollView
            horizontal
            style={styles.scrollSeccionUno}
            showsHorizontalScrollIndicator={false}>
            {populares?.map((movie, index) => {
              return (
                <CardSimple
                  key={index}
                  movie={movie}
                  width={45}
                  url={configuration?.secure_base_url}
                />
              );
            })}
          </ScrollView>
          <View style={styles.seccionUno}>
            <Text style={[theme.title, {fontSize: heightPercentageToDP(2.8)}]}>
              Recomendadas
            </Text>
            <Icon
              name="ellipsis-horizontal"
              size={heightPercentageToDP(4)}
              color={colores.secondary}
            />
          </View>
          <ScrollView
            horizontal
            style={styles.scrollSeccionUno}
            showsHorizontalScrollIndicator={false}>
            {recomendadas?.map((movie, index) => {
              return (
                <CardSimple
                  key={index}
                  movie={movie}
                  width={35}
                  url={configuration?.secure_base_url}
                />
              );
            })}
          </ScrollView>
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
  scrollSeccionUno: {
    maxWidth: widthPercentageToDP(90),
  },
  seccionUno: {
    marginVertical: heightPercentageToDP(2),
    flexDirection: 'row',
    width: widthPercentageToDP(90),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
