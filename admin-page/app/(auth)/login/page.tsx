'use client';

import { useRouter } from 'next/navigation';

import { checkUserSession } from '@/utils/auth';
import { useLayoutEffect } from 'react';
import LoginComponent from './Components/LoginComponent';

const Register = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    const getSession = async () => {
      const hasValidSession = await checkUserSession();

      if (hasValidSession) {
        router.replace('/');
      }
    }
    getSession();
  }, [router]);

  return (
    <LoginComponent />
  )
}

export default Register