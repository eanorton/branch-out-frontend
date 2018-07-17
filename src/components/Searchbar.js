import React from 'react';

const Searchbar = (props) => {
  return (
    <input
      value={props.term}
      onChange={props.handleChange}
      placeholder="Search for Artists"
      />
  )
}

export default Searchbar;
