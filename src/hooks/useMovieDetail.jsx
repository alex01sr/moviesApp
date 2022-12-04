import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import movieDB from '../api/movieDb';
import {useState} from 'react';

export const useMovieDetail = id => {
  const [detallesPeliculas, setDetallesPeliculas] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(id, 'hook');

  const getDetail = async () => {
    const detallesPelicula = movieDB.get(`/movie/${id}`);
    const videosPelicula = movieDB.get(`/movie/${id}/videos`);
    const castPelicula = movieDB.get(`/movie/${id}/credits`);

    const resp = await Promise.all([
      detallesPelicula,
      videosPelicula,
      castPelicula,
    ]);

    setDetallesPeliculas({
      detalles: resp[0].data,
      videos: resp[1].data.results,
      cast: resp[2].data.cast.slice(0, 5),
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return {...detallesPeliculas, isLoading};
};
