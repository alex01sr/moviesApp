import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Colors, FontSize} from '../utils/material';
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {colores, tamaño_texto} from '../theme/appTheme';
import ButtonMenu from './ButtonMenu';
import {
  agregarUsuario,
  recuperarFavoritos,
  setDataUser,
  setJwt,
} from '../../redux/actions';

export default function MenuLateralContent({routes}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {jwt, perfil, favoritos} = useSelector(state => state);

  const submit = () => {
    dispatch(agregarUsuario({...perfil, favoritos}));
    dispatch(setDataUser({}));
    dispatch(recuperarFavoritos([]));
    dispatch(setJwt(''));
  };
  return (
    <View style={styles.container}>
      {jwt ? (
        <>
          <Image
            style={{
              width: widthPercentageToDP(30),
              borderRadius: 100,

              height: widthPercentageToDP(30),
              resizeMode: 'cover',

              alignSelf: 'center',
            }}
            source={require('../../assets/perfil.png')}
          />
          <Text style={styles.name}>{perfil.nombre}</Text>
          <Text style={styles.lastName}>{perfil.email}</Text>
          <ButtonMenu title="Mi perfil" icon="information-circle-outline" />
          <ButtonMenu title="Ajustes" icon="settings-outline" />
          <ButtonMenu title="Politicas" icon="document-text-outline" />
          <ButtonMenu
            funcion={submit}
            title="Salir"
            colorIcon="#F14B4B"
            icon="log-out-outline"
            left={false}
            width={30}
          />
        </>
      ) : (
        <>
          <Text style={styles.name}>Bienvenido</Text>
          <ButtonMenu
            title="Login"
            icon="log-in-outline"
            funcion={() => navigation.navigate('Login')}
          />
          <ButtonMenu
            title="Registro"
            icon="person-add-outline"
            funcion={() => navigation.navigate('Register')}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthPercentageToDP(5),
    marginTop: heightPercentageToDP(5),
    justifyContent: 'flex-start',
  },
  name: {
    textAlign: 'left',
    fontFamily: 'Roboto-Medium',
    fontSize: tamaño_texto.Elarge,
    color: '#fff',
  },
  lastName: {
    textAlign: 'left',
    fontFamily: 'Roboto-Medium',
    fontSize: tamaño_texto.medium,
    color: '#ffffff70',
  },
});
