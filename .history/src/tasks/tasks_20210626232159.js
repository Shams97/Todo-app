import React from "react";
import { Button, Input, P, Container } from "@material-ui/core";
export default function Tasks() {
  return (
    <Container>
      <P>Add new task </P>
      <Input placeholder="type any task"></Input>
      <Button>remove</Button>
    </Container>
  );
}
