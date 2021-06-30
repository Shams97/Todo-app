/**
 *  This component will be the login of the application
 *  Authenticate the user
 *  Remove the last item of the list
 *
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Input,
  CardMedia,
  Grid,
  Paper,
  Container,
  Link,
} from "@material-ui/core";
import { useStyles } from "../styles";
import Completed from "../assetes/completed.svg";
import axios from "axios";

// fetch a new user using post method
async function loginUser(credentials) {
  return fetch("https://api.diana.opensource.softshape.org/accounts/login/", {
    method: "POST",
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const classes = useStyles();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    axios
      .post("https://api.diana.opensource.softshape.org",{
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        headers: {
          "Content-Type": "application/json",
        },
        username: username,
        password: password,
      })
      .then((res) => {
        setToken(res);
        console.log("response =",res);
      });
  };

  const handlePasswordChange = async () => {
          axios.post('https://api.diana.opensource.softshape.org/accounts/password/change/',{


          })

  }
  return (
    <Container>
      <h1 style={{ color: "#3f51b5", textAlign: "center", marginTop: "10px" }}>
        Manage your tasks{" "}
      </h1>
      <Grid container className={classes.root}>
        <Grid item sm={6} className={classes.paper1}>
          <img src={Completed} width="100%" height="100%" />
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <h1 style={{ color: "#3f51b5" }}>LOGIN </h1>
            <form
              onSubmit={(e) => {
                handleSubmit();
                e.preventDefault();
              }}
            >
              <Input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="username"
                required
              />
              <br />
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
                <br />
                <Link onClick={handlePasswordChange}>Forget password ? </Link>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
