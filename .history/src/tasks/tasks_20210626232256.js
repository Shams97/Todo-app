import React from "react";
import { Button, Input, Container } from "@material-ui/core";
export default function Tasks() {
  return (
    <Container>
      <Input placeholder="type any task"></Input>
      <Button>remove</Button>
    </Container>
  );
}
