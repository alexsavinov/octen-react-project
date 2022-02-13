import React, {FC, useEffect} from 'react';
import {Spinner} from "react-bootstrap";
import {useParams} from "react-router-dom";

import {MoviesListCard, Paginator} from "../../components";
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAllGenres, getAllMovies} from '../../store';

const MoviesList: FC = () => {
    const {movies, page, genres, status, error} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const data = useParams();

    useEffect(() => {
        dispatch(getAllMovies({pageId: page, genreId: Number(data.genreId)}));
        dispatch(getAllGenres());
    }, [data.genreId]);

    return (
        <div className={'d-flex flex-column align-items-center p-4'}>

            <div className={'d-flex gap-3 flex-wrap justify-content-center mb-5'}>
                {status === 'loading' && <h1><Spinner animation="border"/>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {movies && movies.map(movie => <MoviesListCard key={movie.id} movie={movie} genres={genres}/>)}
            </div>

            <Paginator/>
        </div>
    );
};

export {MoviesList};