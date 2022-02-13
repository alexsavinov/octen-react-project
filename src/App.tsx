import 'bootstrap/dist/css/bootstrap.min.css';
import React, {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import {Header, MoviesList, MovieInfo, GenresList, UserInfo} from './components';
import {MoviesPage} from './pages';

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MoviesPage/>}>
                <Route path={'header'} element={<Header/>}/>

                <Route index element={<Navigate to={'movies'}/>}/>

                <Route path={'movies'} element={<MoviesList/>}/>
                <Route path={'movies/:id'} element={<MovieInfo/>}/>
                <Route path={'genres'} element={<GenresList/>}>
                    <Route path={':genreId'} element={<MoviesList/>}/>
                </Route>
                <Route path={'user'} element={<UserInfo/>}/>
            </Route>
        </Routes>
    );
}

export default App;
