import {heightPercentageToDP} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#1F1C2C',
  secondary: '#FF722A',
};

export const tamaño_texto = {
  Esmall: heightPercentageToDP(1.3),
  small: heightPercentageToDP(1.5),
  medium: heightPercentageToDP(2),
  large: heightPercentageToDP(2.2),
  Elarge: heightPercentageToDP(3.2),
};
export const theme = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: tamaño_texto.Elarge,
    color: '#fff',
  },
});
