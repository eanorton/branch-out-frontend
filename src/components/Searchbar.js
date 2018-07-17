import React from 'react';

const Searchbar = (props) => {
  return (
    <form onSubmit={(event)=>props.onSubmit(event)}>
      <input
        value={props.term}
        onChange={props.handleChange}
        placeholder="Search for Artists"
        />
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Searchbar;
