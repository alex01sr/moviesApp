import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colores} from '../theme/appTheme';

export default function Splash({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image source={require('../../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colores.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
