import { Button, Container, Nav, Navbar } from "react-bootstrap";
import AuthService from "../services/AuthService";

function AdminNavbar() {
    const logout = () => {
        AuthService.logout();
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/admin/users">Administrator</Navbar.Brand>
                <Nav className="me-auto">
                    {/* <Nav.Link href="#home">User</Nav.Link> */}
                    <Nav.Link href="/forms/ProgramCRUD">program-edit</Nav.Link>
                    <Nav.Link href="/forms/OrganizationCRUD">organization-edit</Nav.Link>
                    <Nav.Link href="/admin/transactions/all">Transaction History</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="danger" onClick={logout}>Log out</Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default AdminNavbar;