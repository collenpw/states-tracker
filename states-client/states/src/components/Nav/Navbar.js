import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
    return (
        <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="/home">Where you've been</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Add a state</Nav.Link>
        </Nav.Item>
        
        </Nav>        
    );
};

export default Navbar;