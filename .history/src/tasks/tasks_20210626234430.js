import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input,Grid,Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Tasks() {
    const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
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
