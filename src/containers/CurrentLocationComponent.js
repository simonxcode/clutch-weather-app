import React, { Component } from 'react'
import Search from './SearchComponent'
import { connect } from 'react-redux'
import { changeLocation } from '../actions/index' 

class CurrentLocation extends Component {

  changeLocation = () => {
    this.props.onChangeLocation(this.props.currentLocation)
  }

  render() {
    const { currentLocation } = this.props
    return (
      <div>
         <div>
          <Search />
        </div>
        <div>
          Current Location: {currentLocation}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLocation: state.currentLocationReducer.currentLocation
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