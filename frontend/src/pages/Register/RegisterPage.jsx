import { useState } from 'react';
import Input from '../Login/Components/Input';
import EyeHide from './Components/EyeHide';
import EyeShow from './Components/EyeShow';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [responseSucessful, setResponseSucessful] = useState(false);

  const [responseError, setResponseError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
        credentials: 'include',
      });

      if (response.status === 400) {
        const errorData = await response.json();

        setResponseSucessful(false);
        setResponseError(true);
        setError(errorData.error);
        setErrorDetails(errorData.details);
      } else if (response.status === 409) {
        const errorData = await response.json();

        setResponseSucessful(false);
        setResponseError(true);
        setError(errorData.error);
        setErrorDetails(null);
      } else if (response.status === 500) {
        const errorData = await response.json();

        setResponseSucessful(false);
        setResponseError(true);
        setError(errorData.error);
        setErrorDetails(null);
      } else if (response.status === 200) {
        const sucessData = await response.json();

        setSucessDetails(sucessData.msg);
        setResponseSucessful(true);
        setResponseError(false);
      }

      console.log("res: " + response);
    } catch (error) {
      console.log("Error " + error);
    }
  };

  return (
    <section className='bg-[#FEFAEF] '>
      <div className='px-4 mx-auto bg-white shadow-2xl max-w-screen-2xl md:px-0 md:mt-10 rounded-xl '>
        <div className='flex flex-col items-center justify-center gap-12 py-12'>

          <h1 className='text-xl font-bold uppercase'>Register</h1>
          {responseError &&
            <>
              <div className="flex flex-row justify-between w-full p-4 bg-red-500 rounded-md md:w-80 ">
                <p className="text-base font-semibold text-gray-50 ">
                  {/* {error}
                  <span className='flex flex-col'>
                    {errorDetails?.map(({ field, message }, index) => (
                      <span key={index}>Field {field} : {message}</span>
                    ))}
                  </span> */}
                </p>
                <p className="text-base font-semibold cursor-pointer text-gray-50" onClick={() => setResponseError(false)}>
                  X
                </p>
              </div>
            </>
          }
          {responseSucessful &&
            <>
              <div className="flex flex-row justify-between w-full p-4 bg-green-500 rounded-md md:w-80 ">
                <p className="w-3/4 text-base font-semibold text-gray-50">
                  {/* {sucessDetails} */}
                </p>
                <p className="text-base font-semibold cursor-pointer text-gray-50" onClick={() => setResponseSucessful(false)}>
                  X
                </p>
              </div>
            </>
          }
          <form className="relative space-y-8" >
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
              name='Password (min: 6)'
              id='password'
              type={`${showPassword ? 'text' : 'password'}`}
              placeholder={password}
              required={true}
              moveLabel={password != ''}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className='absolute cursor-pointer top-20 right-2' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeShow /> : <EyeHide />}
            </span>
            <button
              type='submit'
              className={` ${!email || !password ? "cursor-not-allowed opacity-50" : ""} font-semibold py-2 px-8 uppercase bg-[#B06500] text-white rounded-lg border-[#B06500] w-full`}
              disabled={!email || !password}
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>
          <div className='flex gap-2'>
            <p>Login with an exsisting account</p>
            {/* <Link href={'/login'} className='text-blue-500 underline'>Click Here</Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage