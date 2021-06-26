import React from "react";
import { Button, Input, Container } from "@material-ui/core";
export default function Tasks() {
  return (
    <Container>
      <Input placeholder="type any task"></Input>
      <Button variant="contained" color="primary">Add</Button>
      <Button variant="contained" color="secondary">Remove</Button>
    </Container>
  );
}
