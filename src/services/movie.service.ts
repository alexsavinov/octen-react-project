import {axiosService} from './axios.service';
import {urls} from '../constants';
import {IGenre, IMovie} from '../interfaces';

interface ServerResponse {
    results: IMovie[];
    page: number;
    total_pages: number;
    total_results: number;
}

interface ServerResponseGenres {
    genres: IGenre[];
}

export const movieService = {
    getMovies: (pageId: number, genreId: number = 0) =>
        axiosService.get<ServerResponse>(`${urls.movies}?page=${pageId}` + (genreId > 0 ? `&with_genres=${genreId}` : '')),
    getMovieDetailsById: (movieId: number) =>
        axiosService.get<IMovie>(`${urls.movie}/${movieId}?append_to_response=videos,images`),
    getGenres: () =>
        axiosService.get<ServerResponseGenres>(urls.genres)
}
