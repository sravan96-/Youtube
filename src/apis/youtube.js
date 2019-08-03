import axios from 'axios';
const KEY = 'AIzaSyDfBj0Oemgvf_ZA00l1SLqT3qZQ2DRee9o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }
});