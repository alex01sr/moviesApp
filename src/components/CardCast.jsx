import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {tamaño_texto} from '../theme/appTheme';

export default function CardCast({cast, url}) {
  const {gender, name, profile_path} = cast;

  const uri = `${url}w185${profile_path}`;
  return (
    <View style={styles.container}>
      <Image
        style={{
          borderRadius: 100,
          width: heightPercentageToDP(8),
          height: heightPercentageToDP(8),
          resizeMode: 'contain',
        }}
        source={profile_path ? {uri} : require('../../assets/placeholder.png')}
      />
      <View style={styles.boxText}>
        <Text style={styles.textG}>{gender === 1 ? 'Actriz' : 'Actor'}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: heightPercentageToDP(1),
    marginHorizontal: widthPercentageToDP(2),
    height: heightPercentageToDP(8),
  },
  boxText: {
    marginLeft: widthPercentageToDP(2),
  },
  textG: {
    fontFamily: 'Roboto-Regular',
    fontSize: tamaño_texto.medium,
    color: '#A5A5A580',
  },
  name: {
    fontFamily: 'Roboto-Medium',
    fontSize: tamaño_texto.medium,
    color: '#fff',
  },
});
