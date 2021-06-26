import React from 'react'
import { Button,Input,FormLabel ,Container} from '@material-ui/core';




export default function Tasks() {
    return (
            <Container>    
            <FormLabel>Add new task </FormLabel> 
            <Input placeholder="type any task"></Input>
                <Button>remove</Button>
            </Container>
      
    )
}
