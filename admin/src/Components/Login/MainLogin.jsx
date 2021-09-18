import React, { useState, useEffect } from 'react';
import '../../Style/Login.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';

function MainLogin({ setToken }) {
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    async function login(e) {
        e.preventDefault()

        let item = { email, password, from: "admin_panel" }
        await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)

        }).then((response) => {
            return response.json()

        }).then((data) => {
            console.log(data)

        }).catch(
            err => {
                console.log(err)
            }
        )
    }

    return (
        <div className="Login">
            <p className="p1">Welcome to Team 1 Market </p>
            <p className="p2">-Admin Panel-</p>
            <Form onSubmit={(e) => login(e)}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default MainLogin