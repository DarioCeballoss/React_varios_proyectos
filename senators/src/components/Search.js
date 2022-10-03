import React from 'react'

function Search() {
  return (
    <div className="input-group mx-5">
      
        <input type="search" className="form-control"  placeholder='Search...'/>
      
      <button type="button" className="btn btn-primary mx-n1">
        Submit
      </button>
    </div>
  )
}

export default Search;
