import React, { useEffect, useState } from 'react'
import axios from 'axios';

const User = ({ profile, onLogout }) => {
  return (
    <div>
      <button className='btn btn-primary m-4' onClick={onLogout}>Logout</button>
      <center><img className='mt-4' src={profile.picture.data.url} /></center>
      <br />
      <h1 className='text-center fw-bold my-2'>Hello {profile.name}</h1>
      <hr />
      <br />
      <center><h2 className='text-secondary-emphasis fw-bold'>Page Insights</h2></center>
      <div className='container d-flex justify-content-evenly flex-wrap border border-primary rounded-2 py-2'>
        <div className='bg-primary m-1 rounded-3 p-2'>Card1</div>
        <div className='bg-primary m-1 rounded-3 p-2'>Card2</div>
        <div className='bg-primary m-1 rounded-3 p-2'>Card3</div>
        <div className='bg-primary m-1 rounded-3 p-2'>Card4</div>
      </div>
      <div className='container text-center py-3'>Pages cannot be fetched due to advanced access</div>
    </div >
  )
}

export default User