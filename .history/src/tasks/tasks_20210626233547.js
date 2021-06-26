import React from "react";
import { Button, Input, Container,Grid } from "@material-ui/core";
export default function Tasks() {
  return (
    <Grid container spacing={2}>
      <Input placeholder="type any task"></Input>
      <Button variant="contained" color="primary">Add</Button>
      <Button variant="contained" color="secondary">Remove</Button>
    </Grid>
  );
}
