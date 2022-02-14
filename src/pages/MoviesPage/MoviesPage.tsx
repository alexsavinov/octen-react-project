import {Outlet} from 'react-router-dom';

import {Header} from '../../components';
import {useAppSelector} from '../../hooks';

const MoviesPage = () => {
    const {isDarkMode} = useAppSelector(state => state.movieReducer);

    document.body.style.background = (isDarkMode ? '#AAAAAA' : '#EEEEEE');

    return (
        <div>
            <Header/>
            <div className={'d-flex justify-content-evenly'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {MoviesPage}