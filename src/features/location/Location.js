/* new Location component with Redux State and Action */
import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { changeLocation } from './locationSlice'

export function Location() {
  return (
    <div>
      <form>
        <input type='text' name='location' placeholder='city or zipcode'></input>
        <button>search</button>
      </form>
    </div>
  );
}