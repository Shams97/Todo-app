import React,{ useState } from "react";
import { Button, Input,Grid,Paper } from "@material-ui/core";

const 

export default function Tasks() {
    const classes = useState();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Input placeholder="type any task"></Input>
          <Button variant="contained" color="primary">
            Add
          </Button>
          <Button variant="contained" color="secondary">
            Remove
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
