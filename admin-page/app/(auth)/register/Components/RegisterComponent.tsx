'use client';

import Input from '@/app/(site)/Components/Input';

import React, { ChangeEvent, useState } from 'react';

import EyeHide from '@/app/(auth)/Components/EyeHide';
import EyeShow from '@/app/(auth)/Components/EyeShow';

const RegisterComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [sucess, setSucess] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSucess(null);
    setError(null);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/api/auth/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          username: userName,
          password
        }),
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setSucess(data.data);
      } else {
        const data = await response.json();
        setError(data.error);
      }

    } catch (error) {
      console.log("Error " + error);
    }
  };

  return (
    <section className='bg-[#FEFAEF] '>
      <div className='px-4 mx-auto bg-white shadow-2xl max-w-screen-2xl md:px-0 md:mt-10 rounded-xl '>
        <div className='flex flex-col items-center justify-center gap-12 py-12'>
          <h1 className='text-xl font-bold uppercase'>Register</h1>
          {error &&
            <>
              <div className="flex flex-row justify-between w-full p-4 bg-red-500 rounded-md md:w-80 ">
                <p className="text-base font-semibold text-gray-50 ">
                  {error}
                </p>
              </div>
            </>
          }
          {sucess &&
            <>
              <div className="flex flex-row justify-between w-full p-4 bg-green-500 rounded-md md:w-80 ">
                <p className="w-3/4 text-base font-semibold text-gray-50">
                  {sucess}
                </p>
              </div>
            </>
          }
          <form className="relative space-y-8" >
            <Input
              name='Username'
              id='username'
              placeholder={userName}
              required={true}
              moveLabel={userName != ''}
              type='userName'
              onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
            />
            <Input
              name='Email'
              id='email'
              placeholder={email}
              required={true}
              moveLabel={email != ''}
              type='email'
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <Input
              name='Password (min: 6)'
              id='password'
              type={`${showPassword ? 'text' : 'password'}`}
              placeholder={password}
              required={true}
              moveLabel={password != ''}
              error={password.length < 6}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <span className='absolute cursor-pointer top-20 right-2' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeShow /> : <EyeHide />}
            </span>
            <button
              type='submit'
              className={` ${!email || !password ? "cursor-not-allowed opacity-50" : ""} custom-brown-btn w-full`}
              disabled={!email || !password}
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RegisterComponent