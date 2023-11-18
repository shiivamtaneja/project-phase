"use client";

import Image from 'next/image';
import React from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
  const path = usePathname();

  const router = useRouter();

  return (
    <div className='flex flex-col justify-between pr-2 bg-white border-r shadow-2xl w-80'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col items-center justify-center gap-6 p-4 pt-10'>
          <Link href={'/'}>
            Dashboard
          </Link>
          <span className='font-semibold tracking-wide'>
          </span>
        </div>
        <div className='flex flex-col gap-4 p-2'>
          <Link href={'/candidate-tracking'} className={`${path.split('/')[1] === 'candidate-tracking' ? 'custom-brown-btn' : 'custom-brown-btn-bg-transparent hover:bg-[#B06500] hover:text-white hover:border-[#B06500] transition ease-in-out'} text-center`}>
            Candidates Tracking
          </Link>
          <Link href={'/deck-automation'} className={`${path.split('/')[1] === 'deck-automation' ? 'custom-brown-btn' : 'custom-brown-btn-bg-transparent hover:bg-[#B06500] hover:text-white hover:border-[#B06500] transition ease-in-out'} text-center`}>
            Deck Automation
          </Link>
          <Link href={'/quotients'} className={`${path.split('/')[1] === 'quotients' ? 'custom-brown-btn' : 'custom-brown-btn-bg-transparent hover:bg-[#B06500] hover:text-white hover:border-[#B06500] transition ease-in-out'} text-center`}>
            All Quotients
          </Link>
        </div>
      </div>
      <div className='p-2' >
        <Image width={28} height={28} src={'/images/logout.png'} alt="profile pic" className="cursor-pointer rounded-xl" />
      </div>
    </div>
  )
}

export default Sidebar