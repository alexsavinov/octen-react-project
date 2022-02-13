import React, {FC, useEffect} from 'react';
import {Spinner} from 'react-bootstrap';
import {HouseDoor} from 'react-bootstrap-icons';
import {useParams} from 'react-router-dom';

import {urls} from '../../constants';
import {Images, Videos} from '../../components';
import {GenreBadge} from '../GenreBadge/GenreBadge';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getMovie} from '../../store';

const MovieInfo: FC = () => {
    const {movie, status, error, isDarkMode} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(getMovie(Number(movie?.id) || Number(params?.id)));
    }, []);

    return (
        <div>
            {status === 'loading' && <h1><Spinner animation={'border'}/>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {
                movie &&
                <div className={'d-flex flex-column m-0 p-0'}>

                    <div className={'d-flex flex-row flex-column flex-md-row'}>

                        <div className={'d-flex flex-column m-4 p-0'}>

                            <div className={'h1 d-flex m-4 ' + (isDarkMode ? 'text-light' : 'text-dark')}>
                                {movie.original_title}
                            </div>

                            {movie.homepage && <a href={movie.homepage}
                                                  target='_blank'
                                                  className={'d-flex text-decoration-none ms-4 '
                                                      + (isDarkMode ? 'text-light' : 'text-dark')}>
                                <HouseDoor size={15} className={'align-self-center'}/> Homepage</a>}

                            <div className={'ms-4 mb-2'}>
                                {movie.genres && movie.genres.map(genre => <GenreBadge key={genre?.id}
                                                                                       id={genre?.id}
                                                                                       name={genre?.name}/>)
                                }
                            </div>

                            {movie.revenue !== 0 &&
                                <div className={'ms-4 mb-4'}>Revenue: ${movie.revenue?.toLocaleString()}</div>}

                            <div className={'h4 m-4 ' + (isDarkMode ? 'text-light' : 'text-dark')}>
                                {movie.overview}
                            </div>
                        </div>

                        <div>
                            <div className={'m-4 d-flex justify-content-center'}>
                                <img className='d-block rounded' src={urls.images500 + movie.poster_path} alt=''/>
                            </div>
                        </div>
                    </div>

                    {movie.images &&
                        <div className={'m-4'}>
                            <div className={'h4 mb-4'}>Images</div>
                            <Images key={'backdrops'} imageObj={movie.images}/>
                        </div>
                    }

                    {movie && movie.videos &&
                        <div className={'m-4'}>
                            <div className={'h4 mb-4'}>Videos</div>
                            <Videos videos={movie.videos.results}/>
                        </div>
                    }

                </div>
            }
        </div>
    )
};

export {MovieInfo};
