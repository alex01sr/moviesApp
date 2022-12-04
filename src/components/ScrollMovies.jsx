import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colores, tamaño_texto, theme} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import CardSimple from './CardSimple';
export default function ScrollMovies({
  movies = [],
  url = '',
  width = 40,
  title = '',
  sizeTitle = tamaño_texto.medium,
}) {
  return (
    <>
      <View style={styles.seccionUno}>
        <Text style={[theme.title, {fontSize: sizeTitle}]}>{title}</Text>
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
        {movies?.map((movie, index) => {
          return (
            <CardSimple key={index} movie={movie} width={width} url={url} />
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
