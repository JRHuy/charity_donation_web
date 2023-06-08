import Axios from "axios";
import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Table, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import '../styles/user_style.css';
import AuthService from "../services/AuthService";
import { Helmet } from "react-helmet";
import AdminNavbar from "../layouts/AdminNavbar";

export default function UserList() {
    const [users, setUsers] = useState(null);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

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
                setError(true);
                // console.log(err.response.data.message);
                console.log(err);
                setErrorMessage(err.response.data.message);
            })
    }

    const deleteUser = async (id) => {
        await Axios.delete(`http://localhost:8080/api/user/${id}`);
        showUsers();
    }

    const handleDeleteClick = (id) => {
        setSelectedUserId(id);
        setShowConfirmDialog(true);
    };

    const handleConfirmDelete = () => {
        deleteUser(selectedUserId);
        setShowConfirmDialog(false);
    };

    const handleCancelDelete = () => {
        setShowConfirmDialog(false);
    };

    return (
        <>
            <AdminNavbar />
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
                            <th>Active State</th>
                            <th>Date Of Birth</th>
                            <th>Gender</th>
                            <th>Role</th>
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
                                    <td>{user?.isActive.toString()}</td>
                                    <td>{user?.dateOfBirth}</td>
                                    <td>{user?.gender}</td>
                                    <td>{user?.roleID}</td>
                                    <td>
                                        <Button href={`/admin/user/edit/${user?.userID}`} className="mx-2" variant="outline-primary">Edit</Button>
                                        <Button variant="outline-danger" onClick={() => handleDeleteClick(user?.userID)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>

            {showConfirmDialog && (
                <div className='modal-overlay'>
                    <div className='modalContainer'>
                        <h3>Xác nhận</h3>
                        <p>Bạn có chắc chắn muốn xóa người dùng này?</p>
                        <div>
                            <button
                                className='btn btn-confirm btn-danger'
                                onClick={handleConfirmDelete}
                            >
                                Xóa
                            </button>
                            <button
                                className='btn btn-cancel btn-secondary'
                                onClick={handleCancelDelete}
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {error ?
                <div className="alert alert-danger" role="alert">
                    {/* Full authentication is required to access this resource */}
                    {errorMessage}
                </div>
                : ""}

        </>
    )
}