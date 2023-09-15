import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Registration() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [registrationError, setRegistrationError] = useState("");


    const handleRegister = (e) => {
        e.preventDefault();
        // Validate first name and last name: Only alphabets are allowed
        const nameRegex = /^[A-Za-z]+$/;
        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            setRegistrationError("First name and last name should only contain alphabets.");
            return;
        }

        // Check email format using a regular expression
        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailPattern.test(email)) {
            setRegistrationError("Invalid email address. Please enter a valid email.");
            return;
        }

        // Validate password: 8 characters, at least one uppercase, one lowercase, one number, and no special characters other than '@'
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@]?)[A-Za-z\d@]{8,}$/;
        if (!passwordPattern.test(password)) {
            setRegistrationError("Password must be 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit. '@' is optional.");
            return;
        }
        // Check if the password and confirm password fields match
        if (password !== confirmPassword) {
            setRegistrationError("Passwords do not match. Please try again.");
            return;
        }

        // Here, you can perform any necessary validation before proceeding with registration.
        // For simplicity, we'll assume the registration is successful without any checks.

        // You can set a condition here to check if registration was successful or not.
        // For now, we'll assume the registration is successful to demonstrate the success message.
        setRegistrationSuccess(true);
        setRegistrationError("");

        // Clear the form fields after successful registration
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <>
            <p style={{ fontSize: "18px", color: "#414141", fontFamily: "Roboto", marginTop: "50px", textAlign: "center" }}>Home &gt; <span style={{ color: "#f14d54" }}> Create an Account</span></p>
            <h1 style={{ font: "32px", fontFamily: "Roboto", color: "#414141", textAlign: "center", marginTop: "50px" }}>Login Or Create an Account</h1>
            <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>  <h2 style={{ font: "20px", fontFamily: "Roboto", color: "#414141", paddingTop: "75px" }}>Personal Information</h2>
                <hr style={{ marginTop: "20px" }}></hr>
                <h5 style={{ font: "15px", fontFamily: "Roboto-Light", color: "#838383", marginTop: "20px" }}>Please enter following information to create your account</h5>
                <form onSubmit={handleRegister}>
                    <div className="display-res" style={{ display: "flex", marginTop: "20px", height: "75px" }}>

                        <label style={{ font: "15px", fontFamily: "Roboto", color: "#414141" }}>First Name:

                            <TextField style={{ width: "100%", height: "40px", marginTop: "15px" }}
                                required
                                id="outlined-disabled"
                                label="Required"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />

                        </label>


                        <label style={{ font: "15px", fontFamily: "Roboto", color: "#414141", paddingLeft: "50px" }}>Last Name:

                            <TextField style={{ width: "100%", height: "40px", marginTop: "15px" }}
                                required
                                id="outlined-disabled"
                                label="Required"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />

                        </label>

                    </div>
                    <div style={{ marginTop: "40px" }}><label style={{ font: "15px", fontFamily: "Roboto", color: "#414141" }}>Email Address:
                        <div style={{ marginTop: "15px" }}><div style={{ marginTop: "15px" }}><TextField style={{ width: "100%" }}
                            required
                            id="outlined-disabled"
                            label="Required"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /></div></div>
                    </label>
                    </div>
                    <div className="display-res" style={{ display: "flex", marginTop: "40px", height: "100px" }}>
                        <label style={{ font: "15px", fontFamily: "Roboto", color: "#414141" }}>Password:
                            <TextField style={{ width: "100%", marginTop: "15px" }}
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <label style={{ font: "15px", fontFamily: "Roboto", color: "#414141", paddingLeft: "50px" }}>Confirm Password:
                            <TextField style={{ width: "100%", marginTop: "15px" }}
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        style={{ backgroundColor: "#f14d54", height: "45px", width: "136px", color: "white", marginTop: "60px", borderRadius: "3px", borderColor: "white" }}
                    >
                        <h2 style={{ font: "20px", fontFamily: "Roboto", color: "white" }}>Register</h2>
                    </Button>
                </form>

                {registrationSuccess && (
                    <p style={{ textAlign: "center", color: "green" }}>User registered successfully</p>
                )}

                {registrationError && (
                    <p style={{ textAlign: "center", color: "red" }}>{registrationError}</p>
                )}
            </div>
        </>
    );
}

export default Registration;
