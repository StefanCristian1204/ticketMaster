import React, {useEffect, useState} from 'react';
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
const RegisterModal = ({ show, handleClose }) => {
    const [data,setData]= useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [passwordConfirm,setPasswordConfirm]=useState("");
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");

/*    const handleData = () => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setData(parsedData);
            console.log(parsedData);
        }
    };*/



    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePasswordConfirmChange = (event) => {
        setPasswordConfirm(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };



    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:8080/user", {
                username: username,
                password: password,
                passwordConfirm: passwordConfirm,
                email: email,
                name: name,
            });
            console.log(response);
            setData(response.data);


        } catch (error) {
            console.error(error);
        }
    };


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className={"bg-dark text-white"} closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body className={"bg-dark text-white"}>
                <p>Please enter your email and desired username & password.</p>
                <div className="form-outline">
                    <label className="form-label" htmlFor="typeText">Choose your username:</label>
                    <input
                        type="text"
                        id="typeText"
                        className="form-control"
                        placeholder="John Doe"
                        value={username}
                        onChange={handleUsernameChange}
                    />

                </div>
                <div className="form-outline">
                    <label className="form-label" htmlFor="typeEmail">Please enter your email:</label>
                    <input
                        type="email"
                        id="typeEmail"
                        className="form-control"
                        placeholder="john@Doe.com"
                        value={email}
                        onChange={handleEmailChange}
                    />

                </div>
                <div className="form-outline">
                    <label className="form-label" htmlFor="typeName">Enter your name:</label>
                    <input
                        type="text"
                        id="typeName"
                        className="form-control"
                        placeholder="John Doe"
                        value={name}
                        onChange={handleNameChange}
                    />

                </div>
                <div className="form-outline">
                    <label className="form-label" htmlFor="typePassword">Pick a strong password:</label>
                    <input
                        type="password"
                        id="typePassword"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />

                </div>
              {/*  <div className="form-outline">
                    <label className="form-label" htmlFor="typePasswordConfirm">Password Confirmation:</label>

                    <input
                        type="password"
                        id="typePasswordConfirm"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={passwordConfirm}
                        onChange={handlePasswordConfirmChange}
                    />

                </div>*/}
            </Modal.Body>
            <Modal.Footer className={"bg-dark text-white"}>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Register
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RegisterModal;