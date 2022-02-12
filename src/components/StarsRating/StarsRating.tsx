import React, {FC} from 'react';
import {Rating} from 'react-simple-star-rating';

interface IProps {
    vote_average: number;
}

const StarsRating: FC<IProps> = ({vote_average}) => {
    vote_average = vote_average * 10;
    // console.log(vote_average);

    return (

        // <StarsRating2 value={vote_average}/>
        // <Rating ratingValue={vote_average} editing={false}/>
        <Rating
            // onClick={handleRating}
            // onClick={() => {}}
            ratingValue={vote_average}
            // initialValue={vote_average}
            size={30}
            // label
            iconsCount={5}
            transition
            fillColor='orange'
            emptyColor='gray'
            className='foo' // Will remove the inline style if applied
        />
    );
};

export {StarsRating};