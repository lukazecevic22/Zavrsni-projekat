import React from 'react';

const SearchBar = ({change}) => {

  return (
    <div>
      <form>
        <input
          placeholder="Pokemon"
          className="form-control"
          style={{
            backgroundColor: 'white transparent',
            height: '1.75em',
            width: '95%',
            borderRadius: '15px',
          
          }}
          onChange={change}
        />
      </form>
    </div>
  )
}

export default SearchBar