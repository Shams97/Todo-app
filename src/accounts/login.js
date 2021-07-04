import React, { useState } from 'react'
import { useStyles } from "../styles";


export default function Login() {
    const classes = useStyles();
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async (credentials) => {

        credentials = {
        'username':username,     
        'email':email,
        'password':password,
      }
  // Do the fetch request 
      await fetch('https://api.diana.opensource.softshape.org/accounts/registration/',{  
       method: "POST",
       mode: 'no-cors', // no-cors in order to allow origin 
       cache: 'no-cache', 
       credentials: 'same-origin',
       headers: {
         "Content-Type": "application/json",
       },
       body:JSON.stringify(credentials)
     }).then((response)=> 
       console.log("response = ",response)
       )
    };
    return (
     <Grid item sm={6}>
          <Paper className={classes.paper}>
            <h1 style={{ color: "#3f51b5" }}> Sign in </h1>
            <form
              onSubmit={(e) => {
                handleLogin();
                e.preventDefault();
              }}
            >
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
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
              />
              <div className={classes.paper}>
                <Button type="submit" color="primary" variant="contained">
                  Log in
                </Button>
              </div>
            </form>
            </Paper>
        </Grid>
    )
}
