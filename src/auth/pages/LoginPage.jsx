import { useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from '../../hooks/useForm';
import { startChekingAuth, startGoogleSigIn } from "../../store/auth/thunks"

import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

function MailInput({email, onInputChange}) {
  return (
    <div>
      <input type="email" placeholder='example@mail.com' name='email' value={email} onChange={onInputChange}/>
    </div>
  )
}

function PassWordInput({password, onInputChange}) {
  return (
    <div>
      <input
        type="password"
        placeholder="12345678"
        name='password'
        value={password}
        onChange={onInputChange}
      />
    </div>
  )
}

function LoginButton({ submit }) {  
  return (
    <button type='submit' onSubmit={submit}>
      Login
    </button>
  )
}

function GoogleButton({ isAutenticanting }) {
  const dispatch = useDispatch();
  
  function onGoogleSubmit() {
    dispatch( startGoogleSigIn() )

  }
  return (
      <button disabled={ isAutenticanting } onClick={onGoogleSubmit}>
       Google
      </button> 
  )
}

function CreateAccount() {
  return (
      <Link to="/auth/register" color="inherit">
        Create an account 🔥
      </Link>
  )
}

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { status } = useSelector( state => state.auth )
  const isAutenticanting = useMemo(() => status === 'checking', [ status ])

  const {email, password, onInputChange} = useForm({
    email: "yourname@mail.com",
    password: "12345678"
  })

  function onSubmit(event) {
    event.preventDefault()
    dispatch(startChekingAuth())
    console.log({email, password})
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <div>
          <MailInput email={email} onInputChange={onInputChange} />
          <PassWordInput password={password} onInputChange={onInputChange} />
          <div>
            <LoginButton submit={onSubmit}/>
            <GoogleButton isAutenticanting={isAutenticanting} />
          </div>
          <CreateAccount />
        </div>
      </form>
    </AuthLayout>
  );
};
