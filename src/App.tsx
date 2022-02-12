import React, {FC, useEffect} from 'react';
import {Routes, Route, Link, Navigate} from "react-router-dom";
import {MoviesPage} from "./pages";
import {Header, MoviesList, MovieInfo, GenresList, UserInfo} from "./components";

import 'bootstrap/dist/css/bootstrap.min.css';

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
                {/*<Route path={'genres/:genreId'} element={<Navigate replace to="/" />}/>*/}
            </Route>
        </Routes>
    );
}

export default App;
