import React, {FC} from 'react';
import {Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {IGenre} from '../../interfaces';
import {useAppSelector} from '../../hooks';

const GenreBadge: FC<IGenre> = ({id, name}) => {
    const {isDarkMode} = useAppSelector(state => state.movieReducer);

    return (
        <Badge bg={isDarkMode ? 'light' : 'dark'} className={`genre${id} me-1 mb-1`}>
            <Link to={'/genres/' + id}
                  className={'text-decoration-none ' + (isDarkMode ? 'text-dark' : 'text-light')}>
                {name}
            </Link>
        </Badge>
    );
};

export {GenreBadge};
