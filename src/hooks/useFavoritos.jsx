import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {agregarFavoritos, eliminarFavoritos} from '../../redux/actions';
import {toastGenerate} from '../utils/ToastGenerate';

export const useFavoritos = movie => {
  const {favoritos = [], jwt} = useSelector(state => state);
  const [state, setState] = useState(false);
  useEffect(() => {
    let item = favoritos.find(e => e.id === movie.id);

    if (item) {
      setState(true);
    }
  }, []);

  const dispatch = useDispatch();
  const guardar = () => {
    if (!jwt) {
      toastGenerate('Solo puedes agregar a favoritos con una sesion activa');
      return;
    }
    console.log(movie);
    setState(true);
    dispatch(agregarFavoritos(movie));
  };
  const eliminar = () => {
    if (!jwt) {
      toastGenerate('Solo puedes eliminar favoritos con una sesion activa');
      return;
    }
    setState(false);
    dispatch(eliminarFavoritos(movie));
  };

  return {eliminar, guardar, state};
};

const styles = StyleSheet.create({});
