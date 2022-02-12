import React, {FC, useEffect} from 'react';
import {IMovie} from '../../interfaces';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {HistoryRouterProps, useParams} from 'react-router-dom';
import {getMovie} from "../../store";
import {Spinner} from "react-bootstrap";
import {GenreBadge} from "../GenreBadge/GenreBadge";


interface IProps {
    id: number | undefined
}

const MovieInfo: FC = () => {
    const {movie, status, error} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(getMovie(Number(movie?.id)  || Number(params?.id)));
    }, []);

    console.log(movie?.videos);

    // const {videos} = movie;

// "videos": {
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Retaliate Trailer [HD]",
//       "key": "MonFNCgK4WE",
//       "published_at": "2015-04-29T16:00:36.000Z",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "id": "5bcd2702c3a3682863018582"
//     },
//     {
    return (
        <div>
            {status === 'loading' && <h1><Spinner animation={"border"}/>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {
                movie &&
                <div>
                    <div>id: {movie.id}</div>
                    <div>original_title: {movie.original_title}</div>
                    <div>genres: {JSON.stringify(movie.genres)}</div>
                    {movie.genres && movie.genres.map(genre => <GenreBadge key={genre?.id} id={genre?.id} name={genre?.name}/>)}
                    <div>homepage: {movie.homepage}</div>
                    <div>revenue: {movie.revenue}</div>
                    <div>belongs_to_collection: {JSON.stringify(movie.belongs_to_collection)}</div>
                    <div>overview: {movie.overview}</div>
                    <div>poster_path: {movie.poster_path}</div>
                    <div>production_companies: {JSON.stringify(movie.production_companies)}</div>
                    <div>production_countries: {JSON.stringify(movie.production_countries)}</div>
                    {movie.videos && <div>videos: {JSON.stringify(movie.videos)}</div>}
                    {movie.images && <div>videos: {JSON.stringify(movie.images)}</div>}

                </div>}

        </div>
    );
};



// adult: false
// backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
// belongs_to_collection: {id: 531241, name: 'Spider-Man (Avengers) Collection', poster_path: '/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg', backdrop_path: '/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg'}
// budget: 200000000
// genres: (3) [{…}, {…}, {…}]
// homepage: "https://www.spidermannowayhome.movie"
// id: 634649
// imdb_id: "tt10872600"
// original_language: "en"
// original_title: "Spider-Man: No Way Home"
// overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
// popularity: 9972.882
// poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
// production_companies: (3) [{…}, {…}, {…}]
// production_countries: [{…}]
// release_date: "2021-12-15"
// revenue: 1777598802
// runtime: 148
// spoken_languages: (2) [{…}, {…}]
// status: "Released"
// tagline: "The Multiverse unleashed."
// title: "Spider-Man: No Way Home"
// video: false
// vote_average: 8.4
// vote_count: 7536




export {MovieInfo};