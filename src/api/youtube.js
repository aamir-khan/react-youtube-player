import axios from 'axios';

const KEY = 'AIzaSyD6Bg50fHoYt_SVFbaqIcihZBuNZ6uAK00';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
