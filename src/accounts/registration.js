/**
 *  This component will be the login of the application
 *  Authenticate the user
 *  Remove the last item of the list
 *
 */
import { useState } from "react";
import {
  Button,
  Input,
  CardMedia,
  Grid,
  Paper,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../styles";
import Completed from "../assetes/completed.svg";
import axios from "axios";

export default function Registeration() {
  // To prevent default behaviour
  const preventDefault = (event) => event.preventDefault();
  // classes is object for the custom style component from styles file
  const classes = useStyles();
  const [first_name, setFName] = useState();
  const [last_name, setLName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [birth, setBD] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (credentials) => {
    credentials = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      birth: birth,
      password: password,
    };
    // Do the fetch request
    await fetch(
      "https://api.diana.opensource.softshape.org/accounts/registration/",
      {
        method: "POST",
        mode: "no-cors", // no-cors in order to allow origin
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    ).then((response) => console.log("response = ", response));
  };

  // Handle password change
  const handlePasswordChange = async () => {
    axios.post(
      "https://api.diana.opensource.softshape.org/accounts/password/change/",
      {}
    );
  };

  return (
    <Container>
      <h1 style={{ color: "#3f51b5", textAlign: "center", marginTop: "30px" }}>
        Manage your tasks{" "}
      </h1>
      <Grid container className={classes.root}>
        <Grid item sm={6} className={classes.paper1}>
          <img src={Completed} width="100%" height="100%" />
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <h1 style={{ color: "#3f51b5" }}> Sign in </h1>
            <form
              onSubmit={(e) => {
                handleSubmit();
                e.preventDefault();
              }}
            >
              <Input
                type="text"
                onChange={(e) => setFName(e.target.value)}
                placeholder="first name"
                required
              />
              <Input
                type="text"
                onChange={(e) => setLName(e.target.value)}
                placeholder="last name"
              />
              <Input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="username"
                required
              />
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                required
              />
              <Input
                type="date"
                onChange={(e) => setBD(e.target.value)}
                placeholder="birthdate"
              />
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
              />
              <div className={classes.paper}>
                <Button type="submit" color="primary" variant="contained">
                  Submit
                </Button>
                <p>
                  {" "}
                  or you already have account
                </p>
                {/* <Link to="/login">Login</Link> */}
                <br />
                {/* <Link to="/changepassword">Forget password ? </Link> */}
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
