import React, {FC} from 'react';
import {Rating} from 'react-simple-star-rating';

import {useAppSelector} from '../../hooks';

interface IProps {
    vote_average: number;
}

const StarsRating: FC<IProps> = ({vote_average}) => {
    const {isDarkMode} = useAppSelector(state => state.movieReducer);

    return (
        <Rating
            ratingValue={vote_average * 10}
            size={30}
            iconsCount={5}
            transition
            fillColor={isDarkMode ? 'yellow' : 'orange'}
            emptyColor={isDarkMode ? 'gray' : 'lightgrey'}
            style={isDarkMode ? {backgroundColor: 'lightgrey'} : {backgroundColor: 'white'}}
        />
    );
};

export {StarsRating};