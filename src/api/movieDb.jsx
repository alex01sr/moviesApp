import axios from 'axios';
const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '',
    language: 'es-ES',
  },
});

export default movieDB;
