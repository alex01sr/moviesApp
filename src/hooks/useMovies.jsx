import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import movieDB from '../api/movieDb';
import {useState} from 'react';

export const useMovies = () => {
  const [peliculasState, setPeliculasState] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const actualesPromise = movieDB.get('/movie/now_playing');
    const popularesPromise = movieDB.get('/movie/popular');
    const recomendadasPromise = movieDB.get('/movie/top_rated');
    const configuration = movieDB.get('/configuration');

    const resp = await Promise.all([
      actualesPromise,
      popularesPromise,
      recomendadasPromise,
      configuration,
    ]);

    setPeliculasState({
      actuales: resp[0].data.results,
      populares: resp[1].data.results,
      recomendadas: resp[2].data.results,
      configuration: resp[3].data.images,
    });

    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return {
    ...peliculasState,
    isLoading,
  };
};
