export const changeLocation = location  => {
  const newLocation = 'Atlanta' 
  return {
    type: 'CHANGE_LOCATION',
    currentLocation: newLocation
  }
}