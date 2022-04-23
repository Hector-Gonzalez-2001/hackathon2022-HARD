import React from 'react'
import { Button, AppBar, Toolbar, Typography, Drawer, makeStyles, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => {

    return {
        root: {
            display: "flex",
        },

        page:
        {
            width: `100%`,
            padding: theme.spacing(4)
        },

    }

})



export default function Layout({ children, user, setUser, loginStatus, setLoginStatus }) {

    const classes = useStyles()

    return (
        <div className={classes.root}>

            {/* App Bar */}
            < AppBar
                className={classes.navbar}
                elevation={0} >
                <Toolbar>
                    <Typography
                        variant='h5'
                        className={classes.date}
                    >
                        HARD
                    </Typography>

                </Toolbar>
            </AppBar >

            {/* Our App Module (Pages) */}
            < div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div >
        </div >
    );
}