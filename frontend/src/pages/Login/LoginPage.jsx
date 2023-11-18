import { useState } from 'react';
import Input from './Components/Input';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [responseError, setResponseError] = useState(false);
  // const [error, setError] = useState();

  return (
    <section className='bg-[#FEFAEF] '>
      <div className='px-4 mx-auto bg-white shadow-2xl max-w-screen-2xl md:px-0 md:mt-10 rounded-xl '>
        <div className='flex flex-col items-center justify-center gap-12 py-12'>

          <h1 className='text-xl font-bold uppercase'>Login</h1>
          {responseError &&
            <>
              <div className="flex flex-row justify-between w-full p-4 bg-red-500 rounded-md md:w-80 ">
                {/* <p className="text-base font-semibold text-gray-50 ">
                  {error}
                </p> */}
                <p className="text-base font-semibold cursor-pointer text-gray-50" onClick={() => setResponseError(false)}>
                  X
                </p>
              </div>
            </>
          }
          <form className="relative space-y-8">
            <Input
              name='Email'
              id='email'
              placeholder={email}
              required={true}
              moveLabel={email != ''}
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              name='Password'
              id='password'
              type={`${showPassword ? 'text' : 'password'}`}
              placeholder={password}
              required={true}
              moveLabel={password != ''}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className='absolute cursor-pointer top-20 right-2' onClick={() => setShowPassword(!showPassword)}>

            </span>
            <button
              type='submit'
              className={` ${!email || !password ? "cursor-not-allowed opacity-50" : ""} font-semibold py-2 px-8 uppercase bg-[#B06500] text-white rounded-lg border-[#B06500] w-full`}
              disabled={!email || !password}

            >
              Login
            </button>
          </form>
          <div className='flex gap-2'>
            <p>Dont have an account?</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage