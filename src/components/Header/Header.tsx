import {FC} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {PersonCircle, Film} from 'react-bootstrap-icons';

const Header: FC = () => {
    return (
        <Navbar id="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <Film color="white" size={28}/> React-movie-app
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/movies">Movies</Nav.Link>
                        <Nav.Link href="/genres">Genres</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/user"><PersonCircle color="white" size={30}/> Leanne Graham</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export {Header}