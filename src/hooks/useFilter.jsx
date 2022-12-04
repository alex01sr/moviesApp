import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import movieDB from '../api/movieDb';
import {useState} from 'react';

export const useFilter = query => {
  const [filterPeliculas, setFilterPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(query, 'hook');

  const getFilter = async () => {
    try {
      if (query) {
        const detallesPelicula = await movieDB.get(`/discover/movie`, {
          params: {
            with_genres: query,
          },
        });
        setFilterPeliculas(detallesPelicula.data.results);
      } else {
        setFilterPeliculas([]);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilter();
  }, [query]);

  return {filterPeliculas, isLoading};
};
