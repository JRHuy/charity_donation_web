import Axios from "axios";
import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Table, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import '../styles/style.css';

export default function UserList() {
    const [users, setUsers] = useState(null);

    let { id } = useParams();
    // const params = useParams();

    useEffect(() => {
        showUsers();
    }, []);

    const showUsers = () => {
        Axios.get("http://localhost:8080/api/users").then(res => {
            // console.log(res.data.userID);
            setUsers(res.data);
        })
            .catch((err) => {
                console.log(err);
            })
    }

    const deleteUser = async (id) => {
        await Axios.delete(`http://localhost:8080/api/user/${id}`);
        showUsers();
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Administrator</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">User</Nav.Link>
                        <Nav.Link href="#features">Program</Nav.Link>
                        <Nav.Link href="#pricing">Partner</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <div className="mt-2 d-flex justify-content-end">
                    <Button href="/register" variant="warning">Register</Button>
                </div>
                <Table striped borderless hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Phone Number</th>
                            <th>Citizen Identity Number</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Date Of Birth</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user) => (
                                <tr key={user.userID}>
                                    <td>{user?.userID}</td>
                                    <td>{user?.phoneNum}</td>
                                    <td>{user?.citizenIdentityNum}</td>
                                    <td>{user?.name}</td>
                                    <td>{user?.userEmail}</td>
                                    <td>{user?.userPassword}</td>
                                    <td>{user?.dateOfBirth}</td>
                                    <td>{user?.gender}</td>
                                    <td>
                                        <Button href={`/admin/user/edit/${user?.userID}`} className="mx-2" variant="outline-primary">Edit</Button>
                                        <Button variant="outline-danger" onClick={() => deleteUser(user?.userID)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>

        </>
    )
}