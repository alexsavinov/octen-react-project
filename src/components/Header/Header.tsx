import {FC} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {PersonCircle, Film} from 'react-bootstrap-icons';
import DayNightToggle from 'react-day-and-night-toggle';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {setDarkModeThunk} from "../../store";
import {Link} from "react-router-dom";

const Header: FC = () => {
    const {isDarkMode} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    return (
        <Navbar id='top' collapseOnSelect expand='lg' bg={isDarkMode ? 'dark' : 'light'}
                variant={isDarkMode ? 'dark' : 'light'}>
            <Container>
                <Navbar.Brand href='/'>
                    <Link to='/movies' className={'text-decoration-none text-' + (!isDarkMode ? 'dark' : 'light')}>
                        <Film color={isDarkMode ? 'white' : 'black'} size={28}/> React-movie-app
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link>
                            <Link to='/movies'
                                  className={'text-decoration-none text-' + (!isDarkMode ? 'dark' : 'light')}>
                                Movies
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className={'text-decoration-none text-' + (!isDarkMode ? 'dark' : 'light')}
                                  to='/genres'>
                                Genres
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link className={'text-decoration-none text-' + (!isDarkMode ? 'dark' : 'light')}
                                  to='/user'>
                                <PersonCircle color={isDarkMode ? 'white' : 'black'} size={30}/>
                                Leanne Graham
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav className={'ms-4'}>
                        <DayNightToggle
                            onChange={() => dispatch(setDarkModeThunk(!isDarkMode))}
                            checked={isDarkMode}
                            startInactive={false}
                            size={16}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export {Header}