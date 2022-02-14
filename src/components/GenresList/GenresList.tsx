import React, {FC, useEffect} from 'react';
import {ListGroup} from 'react-bootstrap';
import {CameraReels} from 'react-bootstrap-icons';
import {Link, Outlet} from 'react-router-dom';

import {settings} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAllGenres} from '../../store';

const GenresList: FC = () => {
    const {genres, isDarkMode} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);

    return (
        <div className={'d-flex col'}>
            <ListGroup>
                {genres && genres.map(genre =>
                    <Link to={'/genres/' + genre.id} key={genre.id} className={'text-decoration-none'}>
                        <ListGroup.Item key={genre.id}
                                        href=''
                                        className={'text-nowrap' + (isDarkMode ? ' bg-secondary text-light' : '')}>
                            <CameraReels size={settings.sizeCameraReels} className={'me-3'}/>
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
