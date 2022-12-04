import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {agregarFavoritos, eliminarFavoritos} from '../../redux/actions';
import {useFavoritos} from '../hooks/useFavoritos';
export default function Guardar({movie}) {
  const {eliminar, guardar, state} = useFavoritos(movie);
  return (
    <TouchableOpacity onPress={state ? eliminar : guardar}>
      <Icon
        name={state ? 'bookmark' : 'bookmark-outline'}
        size={heightPercentageToDP(4)}
        color="white"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
