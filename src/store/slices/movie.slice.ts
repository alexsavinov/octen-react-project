import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMovie} from '../../interfaces';
import {movieService} from '../../services';

interface IMovieState {
    movie: IMovie;
    movies: IMovie[];
    // update: IMovie | null
}

const initialState: IMovieState = {
    movie: {},
    movies: []
    // update: null
}

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {dispatch}) => {
        const {data} = await movieService.getMovies();
        dispatch(setMovies({movies: data}))
    }
)

export const getMovie = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (movieId:number, {dispatch}) => {
        const {data} = await movieService.getMovieDetailsById(movieId);
        dispatch(setMovie({movie: data}))
    }
)

// export const addCarThunk = createAsyncThunk<void,{ car:IMovie }>(
//     'movieSlice/addCarThunk',
//     async ({movie},{dispatch} ) => {
//         // const {data} = await movieService.create(car);
//         // dispatch(addCar({car: data}))
//     }
// )

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<{ movies: IMovie[] }>) => {
            state.movies = action.payload.movies;
        },
        setMovie: (state, action: PayloadAction<{ movie: IMovie }>) => {
            state.movie = action.payload.movie;
        },
        // addCar: (state, action: PayloadAction<{ car: IMovie }>) => {
        //     state.cars.push(action.payload.car)
        // }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer
export const {setMovies, setMovie} = movieSlice.actions;
