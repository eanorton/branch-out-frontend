import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react'

const Searchbar = (props) => {
  return (
    <div>
      <Form onSubmit={(event)=>{props.handleSubmit(event)}}>
        <Input
          value={props.term}
          onChange={props.handleChange}
          placeholder="Search by Artist"
          style={{padding: "0.5px", width: "20%", fontFamily: 'Raleway, sans-serif'}}
          />
        <Button color="green" type="submit" value="Search" style={{fontFamily: 'Raleway, sans-serif', borderRadius: "4px"}}>SEARCH</Button>
      </Form>
    </div>
  )
}

export default Searchbar;
