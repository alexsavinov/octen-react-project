import {axiosService} from './axios.service';

import {IMovie} from '../interfaces';
import {urls} from '../constants';

// export const movieService = {
//     getAll: () => axiosService.get<ICar[]>(urls.cars),
//     create: (car: ICar) => axiosService.post<ICar>(urls.cars,car)
// }
export const movieService = {
    getMovies: () => axiosService.get<IMovie[]>(urls.movies),
    getMovieDetailsById: (movieId: number) => axiosService.get<IMovie>(`${urls.movie}/${movieId}`)
    // create: (car: ICar) => axiosService.post<ICar>(urls.movie,car)
}
