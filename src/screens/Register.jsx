import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import InputComponent from '../components/InputComponent';
import HeaderTitle from '../components/HeaderTitle';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colores, tamaño_texto} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {agregarUsuario} from '../../redux/actions';
import {toastGenerate} from '../utils/ToastGenerate';

export default function Register() {
  const [register, setRegister] = useState({
    nombre: '',
    email: '',
    password: '',
  });
  const {usuarios} = useSelector(state => state);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const submit = () => {
    for (const campo in register) {
      if (!register[campo]) {
        toastGenerate('El campo ' + campo + ' es obligatorio');

        return;
      }
    }
    if (usuarios[register.email]) {
      toastGenerate('Ya existe el usuario');
      return;
    }
    dispatch(agregarUsuario(register));
    toastGenerate('Registro exitoso, ya puedes iniciar sesion');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.registro}>
        <HeaderTitle title="Registro" />
        <View style={styles.campos}>
          <View>
            <InputComponent
              title="Nombre"
              value={register.nombre}
              setChange={e => setRegister({...register, nombre: e})}
            />

            <InputComponent
              title="Email"
              value={register.email}
              setChange={e => setRegister({...register, email: e})}
            />
            <InputComponent
              title="Contraseña"
              password
              value={register.password}
              setChange={e => setRegister({...register, password: e})}
            />
          </View>
          <TouchableOpacity onPress={submit} style={styles.boton}>
            <Text style={styles.cuenta}>Registrate</Text>
          </TouchableOpacity>
          <View style={styles.boxCuenta}>
            <Text style={[styles.cuenta, {color: '#ffffff50'}]}>
              Ya tienes una cuenta?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.cuenta}>Inicia Sesion</Text>
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
  registro: {
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
