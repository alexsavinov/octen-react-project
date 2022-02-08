// import { AxiosResponse } from 'axios';
import React, {FC, useEffect} from 'react';
// import {Routes, Route, Link, Navigate} from "react-router-dom";

// import {movieService} from './services';
// import {IMovie} from './interfaces';
import {useAppDispatch, useAppSelector} from "./hooks";
import {getAllMovies, getMovie} from "./store";

const App: FC = () => {
    // const [ff, setFf] = useState<AxiosResponse | null>(null);
    // useEffect(() => {
    //     // setFf(movieService.getMovies());
    //     movieService.getMovies().then(data => setFf(data));
    //     console.log(ff);
    // }, []);

    const {movies} = useAppSelector(state => state.movies);
    const {movie} = useAppSelector(state => state.movie);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
        dispatch(getMovie(634649));
    }, [])


    return (
        <div>
            {/*<div>{JSON.stringify(movies)}</div>*/}
            <div>{JSON.stringify(movie)}</div>
            <div>{JSON.stringify(movie.adult)}</div>
            {/*<div>{movie.adult}</div>*/}
        </div>
    );
}

export default App;
