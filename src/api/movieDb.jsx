import axios from 'axios';
const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'dc13dff505a162a429c81c4c035df37e',
    language: 'es-ES',
  },
});

export default movieDB;
