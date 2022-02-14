import {FC, useEffect} from 'react';
import {Pagination, Navbar, Nav} from 'react-bootstrap';
import {ArrowUpSquareFill} from 'react-bootstrap-icons';
import {useParams} from 'react-router-dom';

import {settings} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAllMovies, setPageThunk} from '../../store';

const Paginator: FC = () => {
    const {page, total_pages} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const param = useParams();

    useEffect(() => {
        dispatch(getAllMovies({pageId: page, genreId: Number(param.genreId)}));
    }, [page]);

    const maxPage = total_pages > settings.pagesMax ? settings.pagesMax : total_pages;

    return (
        <Navbar fixed={'bottom'} className='bg-dark bg-opacity-50 text-center text-lg-start justify-content-center'>
            <Nav>
                <Nav.Link href='#top'><ArrowUpSquareFill color='white' size={settings.sizeArrowUpSquareFill}/></Nav.Link>
            </Nav>
            <Pagination className='m-0'>
                <Pagination.First href='#' style={{color: 'black'}} onClick={() => dispatch(setPageThunk(1))}/>
                <Pagination.Prev href='#' disabled={page === 1}
                                 onClick={() => dispatch(setPageThunk(page - 1))}/>
                <Pagination.Item href='#'>{page}</Pagination.Item>
                <Pagination.Next href='#' disabled={page === maxPage}
                                 onClick={() => dispatch(setPageThunk(page + 1))}/>
                <Pagination.Last href='#' onClick={() => dispatch(setPageThunk(maxPage))}/>
            </Pagination>
        </Navbar>
    );
};

export {Paginator};
