import {axiosService} from './axios.service';

import {IGenre, IMovie} from '../interfaces';
import {urls} from '../constants';
// import {AxiosResponse} from 'axios';

// export const movieService = {
//     getAll: () => axiosService.get<ICar[]>(urls.cars),
//     create: (car: ICar) => axiosService.post<ICar>(urls.cars,car)
// }

interface ServerResponse {
    results: IMovie[];
    page: number;
    total_pages: number;
    total_results: number;
}

interface ServerResponseGenres {
    genres: IGenre[];
    // page: number,
    // total_pages: number,
    // total_results: number
}


export const movieService = {
    // getMovies: (pageId: number) => axiosService.get<ServerResponse>(urls.movies),
    getMovies: (pageId: number, genreId: number = 0) =>
        axiosService.get<ServerResponse>(
            `${urls.movies}?page=${pageId}` + (genreId > 0  ? `&with_genres=${genreId}` : '')),
        // axiosService.get<ServerResponse>(`${urls.movies}?page=${pageId}`),
        // axiosService.get<ServerResponse>(`${urls.movies}?page=${pageId}` +`&with_genres=28`),
    getMovieDetailsById: (movieId: number) => axiosService.get<IMovie>(`${urls.movie}/${movieId}?append_to_response=videos,images`),
    getGenres: () => axiosService.get<ServerResponseGenres>(urls.genres)
    // create: (car: ICar) => axiosService.post<ICar>(urls.movie,car)
}
