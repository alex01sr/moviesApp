import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {colores, theme} from '../theme/appTheme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import CardSearch from '../components/CardSearch';
export default function Favoritas() {
  return (
    <View style={styles.container}>
      <View style={styles.favoritas}>
        <Text style={theme.title}>Favoritos</Text>

        <ScrollView style={styles.scrollSearch}>
          {['', '', '', '', ''].map((item, i) => {
            return <CardSearch key={i} />;
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
  favoritas: {
    marginTop: heightPercentageToDP(5),
    width: widthPercentageToDP(90),
  },

  scrollSearch: {
    marginTop: heightPercentageToDP(2),
    maxHeight: heightPercentageToDP(70),
    maxWidth: widthPercentageToDP(90),
  },
});
