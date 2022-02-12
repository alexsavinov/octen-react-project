import {FC, useEffect, useState} from "react";
import {Pagination, Navbar, Nav} from "react-bootstrap";
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllMovies} from "../../store";
import {ArrowUpSquareFill} from "react-bootstrap-icons";

const Paginator: FC = () => {
    const {page, total_pages} = useAppSelector(state => state.moviesReducer);
    const [currentPage, setCurrentPage] = useState(page);

    const maxPage = total_pages > 500 ? 500 : total_pages;

    const param = useParams();
    // console.log('param', param);

    const dispatch = useAppDispatch();
    useEffect(() => {
        // dispatch(getAllMovies({pageId: currentPage, genreId: Number(param.genreId)}));
        dispatch(getAllMovies({pageId: currentPage, genreId: Number(param.genreId) || 0}));
    }, [currentPage]);

    return (
        // <footer id={'paginator'} className={'mt-5 bg-light'}>
        <Navbar fixed={"bottom"} className="bg-dark bg-opacity-50 text-center text-lg-start justify-content-center">
            <Nav>
                <Nav.Link href="#top"><ArrowUpSquareFill color="white" size={38}/></Nav.Link>
            </Nav>
            {/*<footer className="bg-light text-center text-lg-start">*/}
            <Pagination className="m-0">
                <Pagination.First href="#" style={{color: "black"}} onClick={() => setCurrentPage(1)}/>
                <Pagination.Prev href="#" disabled={page === 1}
                                 onClick={() => setCurrentPage(currentPage - 1)}/>
                <Pagination.Item href="#">{page}</Pagination.Item>
                <Pagination.Next href="#" disabled={page === maxPage}
                                 onClick={() => setCurrentPage(currentPage + 1)}/>
                <Pagination.Last href="#" onClick={() => setCurrentPage(maxPage)}/>
            </Pagination>
            {/*</footer>*/}
            {/*</footer>*/}
        </Navbar>
    );
};

export {Paginator};
