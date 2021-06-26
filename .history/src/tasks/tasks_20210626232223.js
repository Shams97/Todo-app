import React from "react";
import { Button, Input, TextField, Container } from "@material-ui/core";
export default function Tasks() {
  return (
    <Container>
      <TextField>Add new task </TextField>
      <Input placeholder="type any task"></Input>
      <Button>remove</Button>
    </Container>
  );
}
