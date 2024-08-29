import React, { useEffect, useState } from 'react'
import axios from 'axios';

const User = ({ profile, onLogout }) => {
  const [pages, setPages] = useState(null);
  const url1 = `https://graph.facebook.com/v20.0/me/accounts?access_token=${profile.accessToken}`;
  
  const fetchInsights = async(page)=>{
    const url2 = `https://graph.facebook.com/v12.0/${page.id}/posts?access_token=${page.access_token}`;
    await axios.get(url2).then(data=>console.log(data)).catch(err=>console.log(err));
  }
    useEffect(() => {
      const fetchPages = async () => {
        await axios.get(url1).then(data => console.log(data)).catch(err => console.log(err));
      }
      fetchPages();
    }, [])
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
        <div className='bg-primary m-1'>Card1</div>
        <div className='bg-primary m-1'>Card1</div>
        <div className='bg-primary m-1'>Card1</div>
      </div>
      <br />
      <div className='container d-flex justify-content-evenly align-items-center flex-wrap text-white'>
        {/* {pages.map((page) => {
          return (
            <div className='bg-primary w-25 text-center m-4 p-3 rounded-3'>
              <h3>{page.name}</h3>
              <div className='bg bg-danger rounded-4'>{page.category}</div>
              <button className='btn btn-dark tetx-white p-2' onClick={()=>fetchInsights(page)}>show insights</button>
            </div>)
        })} */}

      </div>
    </div>
  )
}

export default User