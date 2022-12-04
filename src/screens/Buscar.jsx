import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {colores, theme} from '../theme/appTheme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import CardSearch from '../components/CardSearch';
import {useSearchMovie} from '../hooks/useSearchMovie';
import {useState} from 'react';
import {useSelector} from 'react-redux';
export default function Buscar() {
  const {perfil} = useSelector(state => state);
  const [input, setInput] = useState('');
  const {searchPeliculas} = useSearchMovie(input);
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Text style={theme.title}>Hola, {perfil.nombre}</Text>
        <View style={styles.buscador}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholderTextColor="#DDDDDD50"
            style={styles.input}
            selectionColor={colores.secondary}
            placeholder="Harry potter"
          />
          <View style={styles.buscador_icono}>
            <Icon name="search" size={heightPercentageToDP(4)} color="white" />
          </View>
        </View>
        <ScrollView style={styles.scrollSearch}>
          {searchPeliculas?.map((movie, i) => {
            return <CardSearch key={i} movie={movie} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  home: {
    marginTop: heightPercentageToDP(5),
    width: widthPercentageToDP(90),
  },
  input: {
    backgroundColor: '#DDDDDD50',
    borderRadius: 100,
    paddingHorizontal: widthPercentageToDP(5),
    color: '#fff',
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(75),
  },
  buscador: {
    marginTop: heightPercentageToDP(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buscador_icono: {
    width: heightPercentageToDP(5),
    height: heightPercentageToDP(5),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colores.secondary,
  },
  scrollSearch: {
    marginTop: heightPercentageToDP(2),
    maxHeight: heightPercentageToDP(70),
    maxWidth: widthPercentageToDP(90),
  },
});
