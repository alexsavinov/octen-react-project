import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IGenre, IMovie} from '../../interfaces';
import {movieService} from '../../services';
import {ReducerAction} from "react";

interface IMovieState {
    movieId: number | null;
    page: number;
    movie: IMovie | null;
    movies: IMovie[];
    genres: IGenre[];
    genre: IGenre | null;
    total_pages: number;
    total_results: number;
    status: string | null;
    error: string | null;
    isDarkMode: boolean;
}

const initialState: IMovieState = {
    movieId: null,
    genre: null,
    page: 1,
    total_pages: 1,
    total_results: 1,
    movie: {},
    movies: [],
    genres: [],
    status: 'idle',
    error: null,
    isDarkMode: false
}

interface IParams {
    pageId: number;
    genreId: number;
}

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (data: IParams, {dispatch}) => {
        const {
            data: {
                results,
                page,
                total_pages,
                total_results
            }
        } = await movieService.getMovies(data.pageId, data.genreId);
        dispatch(setMovies({movies: results, page, total_pages, total_results}));
        if (data.genreId) {
            // console.log('data.genreId', data.genreId);
            dispatch(setGenre({genre: <IGenre>{id: data.genreId, name: ''}}));
        }
    }
)

export const getMovie = createAsyncThunk(
    'movieSlice/getMovie',
    async (movieId: number, {dispatch}) => {
        const {data} = await movieService.getMovieDetailsById(movieId);
        dispatch(setMovie({movie: data}));
    }
)

export const setMovieThunk = createAsyncThunk(
    'movieSlice/setMovieThunk',
    async (movie: IMovie, {dispatch}) => {
        // const {data} = await movieService.getMovieDetailsById(movieId);
        // console.log('setMovieThunk', movie);
        dispatch(setMovie({movie}));
    }
)


export const getAllGenres = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, {dispatch}) => {
        const {data: {genres}} = await movieService.getGenres();
        // console.log(genres);
        // const {data: {results, page, total_pages, total_results}} = await movieService.getMovies(pageId);
        // console.log('page', page);
        // dispatch(setMovies({movies: results, page, total_pages, total_results}));
        dispatch(setGenres({genres}));
    }
)

export const setDarkModeThunk = createAsyncThunk(
    'movieSlice/setDarkModeThunk',
    async (isDarkMode: boolean, {dispatch}) => {
        // const {data} = await movieService.getMovieDetailsById(movieId);
        // console.log('setDarkModeThunk', isDarkMode);
        dispatch(setDarkMode({isDarkMode}));
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<{ movies: IMovie[], page: number, total_pages: number, total_results: number }>) => {
            state.movies = action.payload.movies;
            state.page = action.payload.page;
            state.total_pages = action.payload.total_pages;
            state.total_results = action.payload.total_results;

            // console.log('setMovies', state.movies);
        },
        setMovie: (state, action: PayloadAction<{ movie: IMovie }>) => {
            state.movie = action.payload.movie;
            // console.log('setMovie state.movie', state.movie);
        },
        setPage: (state, action: PayloadAction<{ page: number }>) => {
            state.page = 5;
            // state.page = action.payload.page;
            // console.log('setPage state.page', state.page);
            // console.log('setPage action.payload.page', action.payload.page);
        },
        setGenres: (state, action: PayloadAction<{ genres: IGenre[] }>) => {
            state.genres = action.payload.genres;
            // state.page = action.payload.page;
            // console.log('setPage state.page', state.page);
            // console.log('setPage action.payload.page', action.payload.page);
        },
        setGenre: (state, action: PayloadAction<{ genre: IGenre }>) => {
            state.genre = action.payload.genre;
            const index = state.genres.findIndex(genre => genre.id === action.payload.genre.id);
            state.genre.name = state.genres[index].name;
            // console.log('state.genre', state.genre);
            // state.page = action.payload.page;
            // console.log('setPage state.page', state.page);
            // console.log('setPage action.payload.page', action.payload.page);
        },
        setDarkMode: (state, action: PayloadAction<{ isDarkMode: boolean }>) => {
            state.isDarkMode = action.payload.isDarkMode;
        },
    },
    extraReducers: {
        [getAllMovies.pending.toString()]: (state: any, action: PayloadAction<any>) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAllMovies.fulfilled.toString()]: (state: any, action: PayloadAction<any>) => {
            state.status = 'resolved';
            // state.cars = action.payload;
        },
        [getAllMovies.rejected.toString()]: (state: any, action: PayloadAction<any>) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [getMovie.pending.toString()]: (state: any, action: PayloadAction<any>) => {
            state.status = 'loading';
            state.error = null;
        },
        [getMovie.fulfilled.toString()]: (state: any, action: PayloadAction<any>) => {
            state.status = 'resolved';
            // state.cars = action.payload;
        },
        [getMovie.rejected.toString()]: (state: any, action: PayloadAction<any>) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer
export const {setMovies, setMovie, setPage, setGenres, setGenre, setDarkMode} = movieSlice.actions;
