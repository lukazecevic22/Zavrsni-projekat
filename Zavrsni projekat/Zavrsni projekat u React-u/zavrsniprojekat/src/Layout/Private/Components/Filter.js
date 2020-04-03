// import React from 'react'

// export const Filter =({handleInput}) => {
//     return (

//             <input type="text" placeholder="Search"
//                 onChange={(e) => handleInput(e)} />
        
//     )
// }
import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder="Pokemon"/>
        </form>
      </div>
    );
  }
}