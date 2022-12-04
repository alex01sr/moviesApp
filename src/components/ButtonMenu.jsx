import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {colores, tamaño_texto} from '../theme/appTheme';

export default function ButtonMenu({
  title,
  icon,
  width = 60,
  left = true,
  colorIcon = '#FFF',
  funcion = () => {},
}) {
  return (
    <TouchableOpacity
      onPress={funcion}
      style={[styles.container, {width: widthPercentageToDP(width)}]}>
      <Icon name={icon} size={heightPercentageToDP(4)} color={colorIcon} />
      <Text style={styles.title}>{title}</Text>
      {left && (
        <Icon
          name="play-circle-outline"
          size={heightPercentageToDP(4)}
          color="#fff"
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    marginVertical: heightPercentageToDP(5),

    height: heightPercentageToDP(6),
    flexDirection: 'row',
    paddingHorizontal: widthPercentageToDP(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff40',
  },

  title: {
    textAlign: 'left',
    fontFamily: 'Roboto-Medium',
    fontSize: tamaño_texto.medium,
    color: '#fff',
  },
});
