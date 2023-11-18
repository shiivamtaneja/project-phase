'use client';

import { useRouter } from 'next/navigation';

import { checkUserSession } from '@/utils/auth';
import { useLayoutEffect } from 'react';
import RegisterComponent from './Components/RegisterComponent';

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
    <RegisterComponent />
  )
}

export default Register