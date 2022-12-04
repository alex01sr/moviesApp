import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
export default function HeaderTitle({title}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
      <Icon
        name="arrow-back-outline"
        size={heightPercentageToDP(4)}
        color="white"
      />
      <Text style={theme.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',

    width: widthPercentageToDP(30),
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
});
