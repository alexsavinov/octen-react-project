import {Badge, Card} from "react-bootstrap";
import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {IGenre, IMovie} from "../../interfaces";
import {urls} from "../../constants";
import {setMovieThunk} from "../../store";
import {Link} from "react-router-dom";
import {GenreBadge, StarsRating} from "..";


interface IProps {
    // movieId: number | any;
    movie: IMovie;
    genres: IGenre[];
    // getUser:(mum:number)=>IMovie;
}

const MoviesListCard: FC<IProps> = ({movie, genres}) => {
    const {id, title, vote_average, genre_ids, poster_path, release_date, overview} = movie;
    // const {genres} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    const merged = genre_ids?.map(genreId => genres?.find(el => el.id === genreId));

    // console.log('genres', genres);
    // console.log('genre_ids', genre_ids);
    // console.log('merged', merged);
    // console.log('MoviesListCard genres', genres);

    return (
        <Card style={{width: "180px"}} className="shadow-lg bg-body rounded text-decoration-none">

            <Link to={'/movies/' + JSON.stringify(id)} className='text-decoration-none'
                  onClick={() => movie && dispatch(setMovieThunk(movie))}>
                <Card.Img alt="Card image cap"
                          src={urls.images + '/' + poster_path}
                          style={{width: "180px"}}/>
            </Link>

            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title>
                        <Link to={'/movies/' + JSON.stringify(id)}
                              className='text-decoration-none text-dark fs-5'
                              onClick={() => movie && dispatch(setMovieThunk(movie))}>
                            {title}
                        </Link>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" as="h6">
                        {/*{merged && merged.map(genre => <GenreBadge key={genre?.id} id={genre?.id} name={genre?.name}/>)}*/}
                        {merged && merged.map(genre => genre && <GenreBadge key={genre.id} id={genre.id} name={genre.name}/>)}
                    </Card.Subtitle>
                    <Card.Text className='small'>
                        <Link to={'/movies/' + JSON.stringify(id)} className='text-decoration-none text-dark small'
                              onClick={() => movie && dispatch(setMovieThunk(movie))}>
                            {overview && overview.substring(0, 70) + '...'}
                        </Link>
                    </Card.Text>
                </div>

                <Card.Footer className='bg-white border-0 m-0 g-0 p-0 d-flex justify-content-center d-flex flex-column'>
                    {vote_average}
                    <div>

                        {vote_average && <StarsRating vote_average={vote_average}/>}
                    </div>
                    <Badge bg="secondary">{release_date?.substring(0, 4)}</Badge>
                </Card.Footer>
            </Card.Body>

        </Card>
        // {/*</CardGroup>*/}
        // </div>
    )
        ;
};

export {MoviesListCard}