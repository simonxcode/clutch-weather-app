import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeLocation } from '../actions/index' 
import Button from '../components/Button'
import Search from '../components/Search'

class CurrentLocation extends Component {

  changeLocation = () => {
    this.props.onChangeLocation(this.props.currentLocation)
  }

  render() {
    const { currentLocation } = this.props
    return (
      <div>
         <div>
        </div>
        <div>
          <Search />
          <Button 
            buttonTitle='search'
            action={this.changeLocation}
          />
          Current Location: {currentLocation}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // currentLocation: state.currentLocationReducer.currentLocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLocation: (currentLocation) => {
      dispatch(changeLocation(currentLocation))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentLocation)