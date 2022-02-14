import React, {FC} from 'react';
import {Badge, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {GenreBadge, StarsRating} from '..';
import {settings, urls} from '../../constants';
import {IGenre, IMovie} from '../../interfaces';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setMovieThunk} from '../../store';

interface IProps {
    movie: IMovie;
    genres: IGenre[];
}

const MoviesListCard: FC<IProps> = ({movie, genres}) => {
    const {id, title, vote_average, genre_ids, poster_path, release_date, overview} = movie;
    const {isDarkMode} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const merged = genre_ids?.map(genreId => genres?.find(el => el.id === genreId));

    let cardStyle = {width: settings.widthCard + 'px', backgroundColor: 'white', borderColor: 'white'};
    if (isDarkMode) {
        cardStyle.backgroundColor = 'lightgrey';
        cardStyle.borderColor = 'lightgrey';
    }

    return (
        <Card style={cardStyle} className='shadow-lg bg-body rounded text-decoration-none'>

            <Link to={'/movies/' + JSON.stringify(id)} className='text-decoration-none'
                  onClick={() => movie && dispatch(setMovieThunk(movie))}>
                <Card.Img alt='Card image cap'
                          src={urls.images300 + '/' + poster_path}
                          style={{width: settings.widthCard + 'px'}}/>
            </Link>

            <Card.Body className='d-flex flex-column justify-content-between' style={cardStyle}>
                <div>
                    <Card.Title>
                        <Link to={'/movies/' + JSON.stringify(id)}
                              className='text-decoration-none text-dark fs-5'
                              onClick={() => movie && dispatch(setMovieThunk(movie))}>
                            {title}
                        </Link>
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted' as='h6'>
                        {merged && merged.map(genre => genre &&
                            <GenreBadge key={genre.id} id={genre.id} name={genre.name}/>)}
                    </Card.Subtitle>
                    <Card.Text className='small'>
                        <Link to={'/movies/' + JSON.stringify(id)} className='text-decoration-none text-dark small'
                              onClick={() => movie && dispatch(setMovieThunk(movie))}>
                            {overview && overview.substring(0, 70) + '...'}
                        </Link>
                    </Card.Text>
                </div>

                <Card.Footer className={'border-0 g-0 p-0 d-flex justify-content-center d-flex flex-column'}>
                    <div>
                        {vote_average && <StarsRating vote_average={vote_average}/>}
                    </div>
                    {release_date &&
                        <Badge bg={isDarkMode ? 'light' : 'dark'}>
                            <div className={isDarkMode ? 'text-dark' : 'text-light'}>
                                {release_date.substring(0, 4)}
                            </div>
                        </Badge>}
                </Card.Footer>
            </Card.Body>

        </Card>
    );
};

export {MoviesListCard};
