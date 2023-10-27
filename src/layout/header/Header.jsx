import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap'

function Header() {

    return(
        <>
            <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>REACT TODO</Navbar.Brand>

                </Container>

            </Navbar>
        </>
    )

}


export default Header;