import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colores, tamaño_texto, theme} from '../theme/appTheme';

import {TextInput} from 'react-native-gesture-handler';
import InputComponent from '../components/InputComponent';
import HeaderTitle from '../components/HeaderTitle';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {recuperarFavoritos, setDataUser, setJwt} from '../../redux/actions';
import {toastGenerate} from '../utils/ToastGenerate';
export default function Login({navigation}) {
  const [acceso, setAcceso] = useState({email: '', password: ''});
  const {usuarios} = useSelector(state => state);
  const dispatch = useDispatch();
  const submit = () => {
    for (const campo in acceso) {
      if (!acceso[campo]) {
        toastGenerate('El campo ' + campo + ' es obligatorio');

        return;
      }
    }
    const usuario = usuarios[acceso.email];
    if (!usuario) {
      toastGenerate('No tienes una cuenta creada');
      return;
    }
    if (usuario.password === acceso.password) {
      toastGenerate('Inicio exitoso');
      dispatch(setJwt(usuario.email));
      dispatch(setDataUser(usuario));
      dispatch(recuperarFavoritos(usuario.favoritos));
      navigation.goBack();
    } else {
      toastGenerate('Datos incorrectos');
    }
  };
  console.log(acceso);
  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <HeaderTitle title="Login" />
        <View style={styles.campos}>
          <View>
            <InputComponent
              title="Email"
              value={acceso.email}
              setChange={e => setAcceso({...acceso, email: e})}
              state={acceso}
            />
            <InputComponent
              setChange={e => setAcceso({...acceso, password: e})}
              title="Contraseña"
              password
              value={acceso.password}
            />
          </View>
          <TouchableOpacity style={styles.boton} onPress={submit}>
            <Text style={styles.cuenta}>Iniciar Sesion</Text>
          </TouchableOpacity>
          <View style={styles.boxCuenta}>
            <Text style={[styles.cuenta, {color: '#ffffff50'}]}>
              No tienes cuenta?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.cuenta}>Registrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: colores.primary,
  },
  login: {
    marginTop: heightPercentageToDP(5),
    width: widthPercentageToDP(90),
    alignItems: 'center',
  },

  campos: {
    height: heightPercentageToDP(80),
    justifyContent: 'space-around',
  },
  cuenta: {
    color: '#fff',
    fontSize: tamaño_texto.large,
    fontFamily: 'Roboto-Medium',
  },
  boxCuenta: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boton: {
    backgroundColor: colores.secondary,
    borderRadius: 12,
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
