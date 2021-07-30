import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
    return (
        <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="/states">Where you've been</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href='/add'>Add a state</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>
        
        </Nav>        
    );
};

export default Navbar;