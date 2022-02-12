import React, {FC} from 'react';
import {Badge} from 'react-bootstrap';
import {IGenre} from "../../interfaces";
// import {Link, useNavigate} from "react-router-dom";
// import {setMovieThunk} from "../../store";

const GenreBadge: FC<IGenre> = ({id, name}) => {
    // console.log(id);
    // const navigate = useNavigate();


    return (
        // <div className={`d-flex genre${id}`}>
        //     <Link to={'http://localhost:3000/genres/28'}>28</Link>
        //     <button onClick={() => navigate('/genres/1' + id)}>fdfdfdfdfdf</button>
        <Badge bg="secondary" className={`genre${id} me-1 mb-1`}>
            {/*<Link to={'/genres/' + id}*/}
            {/*    className={'text-decoration-none text-light'}*/}
            {/*>*/}
                {name}
            {/*</Link>*/}
        </Badge>
    );
};

export {GenreBadge};