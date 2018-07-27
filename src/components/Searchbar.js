import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react'

const Searchbar = (props) => {
  return (
    <div>
      <Form onSubmit={(event)=>props.onSubmit(event)}>
        <Input
          value={props.term}
          onChange={props.handleChange}
          placeholder="Search for Artists"
          style={{padding: "0.5px", width: "20%", fontFamily: 'Raleway, sans-serif'}}
          />
        <Button color="green" type="submit" value="Search" style={{fontFamily: 'Raleway, sans-serif'}}>SEARCH</Button>
      </Form>
    </div>
  )
}

export default Searchbar;
