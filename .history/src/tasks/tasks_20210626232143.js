import React from "react";
import { Button, Input, Label, Container } from "@material-ui/core";
export default function Tasks() {
  return (
    <Container>
      <Label>Add new task </Label>
      <Input placeholder="type any task"></Input>
      <Button>remove</Button>
    </Container>
  );
}
