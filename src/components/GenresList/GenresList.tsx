import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAllGenres} from '../../store';
import {Link, Outlet, useParams} from "react-router-dom";
import {ListGroup, Spinner} from "react-bootstrap";
import {CameraReels} from "react-bootstrap-icons";

const GenresList: FC = () => {

    const {genres, status, error} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    // const params = useParams();

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);

    // console.log(genres);
    // console.log(params.genreId);

    return (
        <div className={'d-flex col'}>

            {/*{status === 'loading' && <h1><Spinner animation="border"/>Loading...</h1>}*/}
            {/*{error && <h1>{error}</h1>}*/}

            <ListGroup>
                {genres && genres.map(genre =>
                    <Link to={'/genres/' + genre.id}  key={genre.id} className={'text-decoration-none text-dark'}>
                        <ListGroup.Item key={genre.id} href="" className={'text-nowrap'}>
                            <CameraReels size={18} className={'me-3'}/>
                            {genre.name}
                        </ListGroup.Item>
                    </Link>
                )}
            </ListGroup>
            <div>
                <Outlet/>

            </div>
        </div>
    );
};

export {GenresList};