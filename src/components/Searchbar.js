import React from 'react';

const Searchbar = (props) => {
  return (
    <div>
      <form onSubmit={(event)=>props.onSubmit(event)}>
        <input
          value={props.term}
          onChange={props.handleChange}
          placeholder="Search for Artists"
          />
        <br></br>
        <input type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default Searchbar;
