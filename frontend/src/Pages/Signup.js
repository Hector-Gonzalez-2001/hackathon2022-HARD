import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, InputAdornment, Typography, makeStyles, Box, Grid } from "@material-ui/core";
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded'
import { VpnKeyRounded } from '@material-ui/icons';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

const useStyles = makeStyles({
    text: {
        marginTop: 20,
        marginBottom: 130,
        display: 'block',
    },

    userField: {
        marginBottom: 10,
        display: 'block',
    },

    passwordField: {
        marginBottom: 10,
        display: 'block',
    },

    confirmField: {
        marginBottom: 45,
        display: 'block',
    },

    button: {
        borderRadius: 10,
    },
})

export default function Signup() {  
    const classes = useStyles()
    const navigate = useNavigate()
    const [username, setUser] = useState('')
    const [password, setPass] = useState('')
    const [userError, setUserError] = useState(false)
    const [passError, setPassError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();

        setUserError(false)
        setPassError(false)

        if (username === '') {
            setUserError(true)
        }

        if (password === '') {
            setPassError(true)
        }

        if (username && password) {

            const requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify({ "user": username, "pass": password })
            }

            fetch("/login/", requestOptions)
                .then(response =>
                    response.json()
                )
                .then(data => {
                    // console.log(data.output)
                    if (data.output === "User Found") {
                        // Update our user status
                        //setGlobalUser(username)
                        //setLoginStatus("Log Out")
                        //notify(true)
                    } else {
                        //notify(false)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            //we have to then return the profile depending on the log in information here.
        }
    }
  
    return (
        <Box id="container">
            <Box id="welcome-text" textAlign="center">
                <Typography
                    variant='h1'
                    className={classes.text}
                >
                    Welcome!
                </Typography>

                <Typography id="server-response" variant="h2">
                    {}
                </Typography>
            </Box>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <Box id="user-input" alignItems="center" px={55}>
                    <TextField
                        className={classes.userField}
                        label="Username"
                        color="secondary"
                        onChange={
                            (e) => setUser(e.target.value)
                        }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountBoxRoundedIcon />
                                </InputAdornment>
                            ),
                            style: {
                                fontSize: 24,
                            },
                        }}
                        InputLabelProps={{
                            style: { fontSize: 22 }
                        }}
                        required
                        fullWidth
                        error={userError}
                    />
                </Box>

                <Box id="pass-input" alignItems="center" px={55}>
                    <TextField
                        className={classes.passwordField}
                        type="password"
                        label="Password"
                        color="secondary"
                        onChange={
                            (e) => setPass(e.target.value)
                        }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKeyRounded />
                                </InputAdornment>
                            ),
                            style: {
                                fontSize: 24,
                            },
                        }}
                        InputLabelProps={{
                            style: { fontSize: 22 }
                        }}
                        autoComplete="current-password"
                        required
                        fullWidth
                        error={passError}
                    />
                </Box>

                <Box id="confirm-input" alignItems="center" px={55}>
                    <TextField
                        className={classes.confirmField}
                        type="password"
                        label="Confirm Password"
                        color="secondary"
                        onChange={
                            (e) => setPass(e.target.value)
                        }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CheckCircleRoundedIcon />
                                </InputAdornment>
                            ),
                            style: {
                                fontSize: 24,
                            },
                        }}
                        InputLabelProps={{
                            style: { fontSize: 22 }
                        }}
                        autoComplete="current-password"
                        required
                        fullWidth
                        error={passError}
                    />
                </Box>

                <Grid id="login-button/signup" container spacing={2} justify="center">
                    <Grid item alignContent='center'>
                        <Button
                            id="login"
                            className={classes.button}
                            variant="contained"
                            type="submit"
                            endIcon={<ArrowRightRoundedIcon fontSize='large' />}
                            style={{ fontSize: 18, maxHeight: 30 }}
                        >
                            Sign Up
                        </Button>
                    </Grid>

                    <Grid item alignContent='center'>
                        <Button
                            id="signup"
                            className={classes.button}
                            variant="contained"
                            endIcon={<ArrowRightRoundedIcon fontSize='large' />}
                            style={{ fontSize: 18, maxHeight: 30 }}
                            onClick={() => navigate('/Signup')}
                        >
                            Returning User?
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>

    );
  }