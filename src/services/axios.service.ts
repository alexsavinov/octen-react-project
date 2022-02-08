import axios from 'axios';

import baseURL from '../constants/urls';

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM3ZTNlY2I0NzkzOWM1YzJiN2U5NzZmN2Y1YTNlZCIsInN1YiI6IjYyMDAwYzNhOGYyNmJjMDBjYjEwMjgyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.66Cde4kxeVsNVVbhnUs0lsaT83OkWgHz-epkFxRRqok'
    }
});
