import React from 'react';
import { Input } from 'semantic-ui-react'

const Searchbar = (props) => {
  return (
    <div>
      <form onSubmit={(event)=>props.onSubmit(event)}>
        <Input
          value={props.term}
          onChange={props.handleChange}
          placeholder="Search for Artists"
          />
        <br></br>
        <Input type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default Searchbar;
