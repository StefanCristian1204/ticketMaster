import React, {useEffect, useState} from 'react';
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
const LoginModal = ({ show, handleClose }) => {
   const [data,setData] = useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:8080/token", null, {
                auth: {
                    username: username,
                    password: password
                }
            });
            console.log(response);
            setData(response.data);
            localStorage.setItem('data', JSON.stringify(response.data));

        } catch (error) {
            console.error(error);
        }
    };

console.log(data)


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className={"bg-dark text-white"} closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body className={"bg-dark text-white"}>
                <p>Please enter your email and desired username & password.</p>
                <div className="form-outline">
                    <label className="form-label" htmlFor="typeText">Enter your username.</label>
                    <input type="text" id="typeText" className="form-control" placeholder="John Doe" value={username}
                           onChange={handleUsernameChange}/>
                </div>
                <div className="form-outline">
                    <label className="form-label" htmlFor="typePassword">Enter your password.</label>
                    <input type="password" id="typePassword" className="form-control" placeholder="Password" value={password}
                           onChange={handlePasswordChange}/>
                </div>
            </Modal.Body>
            <Modal.Footer className={"bg-dark text-white"}>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LoginModal;