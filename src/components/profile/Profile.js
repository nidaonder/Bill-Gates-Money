import React from 'react'
import billgates from "../../public/billgates.jpg";
import './profile.css'

function Profile() {
  return (
    <div id='profile'>
        <img id='photo' src={billgates} alt="bill gates" />
        <h1>Spend Bill Gates' Money</h1>
    </div>
  )
}

export default Profile