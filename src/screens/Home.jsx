import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {colores, tamaño_texto, theme} from '../theme/appTheme';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {agregarUsuario, setFilter} from '../../redux/actions';
import CardCategoria from '../components/CardFGenero';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import CardCarousel from '../components/CardCarousel';
import CardSimple from '../components/CardSimple';
import movieDB from '../api/movieDb';
import {useMovies} from '../hooks/useMovies';
import ScrollMovies from '../components/ScrollMovies';
import {useFilter} from '../hooks/useFilter';
import CardSearch from '../components/CardSearch';
const categorias = ['Todas', 'Accion', 'Comedia', 'Terror'];

export default function Home() {
  const {perfil, usuarios, filterSelect} = useSelector(state => state);
  const {actuales, populares, recomendadas, generos, isLoading} = useMovies();
  const {urlImages} = useSelector(state => state);
  const {filterPeliculas} = useFilter(filterSelect.id);
  const dispatch = useDispatch();

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
              <CardCategoria genero={{id: '', name: 'Todos'}} />
              {generos?.map((genero, index) => {
                return <CardCategoria key={index} genero={genero} />;
              })}
            </ScrollView>
            <TouchableOpacity onPress={() => dispatch(setFilter('Todos'))}>
              <Icon
                name="trash-outline"
                size={heightPercentageToDP(3)}
                color="white"
              />
            </TouchableOpacity>
          </View>
          {filterSelect.name === 'Todos' ? (
            <>
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
            </>
          ) : (
            <>
              {/*  <ScrollView style={styles.scrollSearch}> */}
              {filterPeliculas?.map((movie, i) => {
                return <CardSearch key={i} movie={movie} />;
              })}
              {/*   </ScrollView> */}
            </>
          )}
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
    marginVertical: heightPercentageToDP(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollHome: {
    maxWidth: widthPercentageToDP(80),
  },
  scrollSearch: {
    marginTop: heightPercentageToDP(2),
    maxHeight: heightPercentageToDP(70),
    maxWidth: widthPercentageToDP(90),
  },
});
