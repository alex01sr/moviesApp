import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {tamaño_texto} from '../theme/appTheme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default function CardCategoria({categoria}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textCategoria}>{categoria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP(5),
    /*  backgroundColor: '#FF692B40', */
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: widthPercentageToDP(5),
    marginHorizontal: widthPercentageToDP(1),
  },
  textCategoria: {
    fontFamily: 'Roboto-Medium',
    fontSize: tamaño_texto.medium,
    color: '#fff',
  },
});
