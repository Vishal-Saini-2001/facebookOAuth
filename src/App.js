import './App.css';
import User from './routes/User';
import React, { useCallback, useState } from 'react'
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from 'reactjs-social-login';

function App() {
  const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState(null)

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, [])

  return (
    <div>
      {provider && profile ? (
        <User provider={provider} profile={profile} onLogout={onLogoutSuccess} />
      ) : (
        <>
          <h1 className='text-center fw-bold py-5'>Login Page</h1>
          <br />
          <LoginSocialFacebook
            appId="2190987827942360"
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
              console.log(provider,data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
        </>
      )}

    </div>
  )
}

export default App;
