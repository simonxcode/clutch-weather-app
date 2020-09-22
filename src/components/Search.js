import React, { Component } from 'react'
class Search extends Component {

  render() {
    return (
      <div>
        <form>
          <input 
            type='text'
            name='location'
            placeholder="city or zipcode"
          />
        </form>
      </div>
    )
  }
}

export default Search