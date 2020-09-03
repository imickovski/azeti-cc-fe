import React from 'react';
import './App.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Form from './components/Form';

// Material Ui Styles for The Avatar
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }),
);

function App() {

  const classes = useStyles();

  return (
    <div className="App">

      <h1>Your Profile Page</h1>

      <Avatar alt="Ivan Mickovski" src='https://c8.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg' className={classes.large} />

      <h3>Name: (Place for the User's Name) </h3>
      <h3>Email: (Place for the User's Email) </h3>

      <Form />

    </div>
  );
}

export default App;
