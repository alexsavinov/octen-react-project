import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {settings} from '../../constants';
import {IGenre, IMovie} from '../../interfaces';
import {movieService} from '../../services';

interface IMovieState {
    movieId: number | null;
    page: number;
    movie: IMovie | null;
    movies: IMovie[];
    genres: IGenre[];
    genre: IGenre | null;
    total_pages: number;
    status: string | null;
    error: string | null;
    isDarkMode: boolean;
}

const initialState: IMovieState = {
    movieId: null,
    genre: null,
    page: 1,
    total_pages: 1,
    movie: {},
    movies: [],
    genres: [],
    status: 'idle',
    error: null,
    isDarkMode: settings.isDarkMode,
}

interface IParams {
    pageId: number;
    genreId: number;
}

export const getAllGenres = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, {dispatch}) => {
        const {data: {genres}} = await movieService.getGenres();
        dispatch(setGenres({genres}));
    }
)

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (data: IParams, {dispatch}) => {
        const {
            data: {
                results,
                page,
                total_pages
            }
        } = await movieService.getMovies(data.pageId, data.genreId);

        dispatch(setMovies({movies: results, page, total_pages}));
        if (data.genreId) {
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

export const setDarkModeThunk = createAsyncThunk(
    'movieSlice/setDarkModeThunk',
    async (isDarkMode: boolean, {dispatch}) => {
        dispatch(setDarkMode({isDarkMode}));
    }
)

export const setMovieThunk = createAsyncThunk(
    'movieSlice/setMovieThunk',
    async (movie: IMovie, {dispatch}) => {
        dispatch(setMovie({movie}));
    }
)

export const setPageThunk = createAsyncThunk(
    'movieSlice/setPageThunk',
    async (page: number, {dispatch}) => {
        dispatch(setPage({page}));
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<{ isDarkMode: boolean }>) => {
            state.isDarkMode = action.payload.isDarkMode;
        },
        setGenre: (state, action: PayloadAction<{ genre: IGenre }>) => {
            state.genre = action.payload.genre;
            const index = state.genres.findIndex(genre => genre.id === action.payload.genre.id);
            state.genre.name = state.genres[index].name;
        },
        setGenres: (state, action: PayloadAction<{ genres: IGenre[] }>) => {
            state.genres = action.payload.genres;
        },
        setMovie: (state, action: PayloadAction<{ movie: IMovie }>) => {
            state.movie = action.payload.movie;
        },
        setMovies: (state, action: PayloadAction<{ movies: IMovie[], page: number, total_pages: number}>) => {
            state.movies = action.payload.movies;
            state.page = action.payload.page;
            state.total_pages = action.payload.total_pages;
        },
        setPage: (state, action: PayloadAction<{ page: number }>) => {
            state.page = action.payload.page;
        }
    },
    extraReducers: {
        [getAllMovies.pending.toString()]: (state: any, action: PayloadAction<any>) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAllMovies.fulfilled.toString()]: (state: any, action: PayloadAction<any>) => {
            state.status = 'resolved';
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
        },
        [getMovie.rejected.toString()]: (state: any, action: PayloadAction<any>) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer;
export const {setDarkMode, setGenre, setGenres, setMovie, setMovies, setPage} = movieSlice.actions;
