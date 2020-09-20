import React, { Component } from 'react'
import Button from '../components/Button'


class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input />
          <Button 
            action={this.changeLocation}
            buttonTitle = 'search'
          />
        </form>
      </div>
    )
  }
}

export default Search