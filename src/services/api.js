import axios from 'axios';

//base da url: https://api.themoviedb.org/3
///movie/now_playing?api_key=64ad1d093931b3f0843b65f57b8f8647

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;