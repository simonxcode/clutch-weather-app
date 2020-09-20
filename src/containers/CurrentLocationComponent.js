import React, { Component } from 'react'
import Button from '../components/Button'
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
          Current Location: {currentLocation}
        </div>
        <div>
          <Button 
            action={this.changeLocation}
            buttonTitle = 'search'
          />
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