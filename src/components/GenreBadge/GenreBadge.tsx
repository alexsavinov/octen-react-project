import React, {FC} from 'react';
import {Badge} from 'react-bootstrap';
import {IGenre} from "../../interfaces";
import {Link} from "react-router-dom";

const GenreBadge: FC<IGenre> = ({id, name}) => {
    return (
        <Badge bg="secondary" className={`genre${id} me-1 mb-1`}>
            <Link to={'/genres/' + id} className={'text-decoration-none text-light'}>
                {name}
            </Link>
        </Badge>
    );
};

export {GenreBadge};