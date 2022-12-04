import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import movieDB from '../api/movieDb';
import {useState} from 'react';

export const useSearchMovie = query => {
  const [searchPeliculas, setSearchPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSearch = async () => {
    try {
      if (query) {
        const detallesPelicula = await movieDB.get(`/search/movie`, {
          params: {
            query,
          },
        });
        setSearchPeliculas(detallesPelicula.data.results);
      } else {
        setSearchPeliculas([]);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [query]);

  return {searchPeliculas, isLoading};
};
