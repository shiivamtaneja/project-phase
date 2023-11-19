"use client";

import Image from 'next/image';
import React, { useLayoutEffect, useState } from 'react';

import { checkUserSession } from '@/utils/auth';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';



import { Book } from '@/app/icons/Book';
import { Briefcase } from '@/app/icons/Briefcase';
import { EnvelopeOpen } from '@/app/icons/EnvelopeOpen';
import { Key } from '@/app/icons/Key';
import { LifeRing } from '@/app/icons/LifeRing';
import { RocketLaunch } from '@/app/icons/RocketLaunch';
import { Sliders } from '@/app/icons/Sliders';
import { Users } from '@/app/icons/Users';
import {
  Sidebar,
  SidebarColor,
  SidebarState,
  useSidebar,
} from '@rewind-ui/core';

const SidebarComponent = () => {
  const path = usePathname();

  const router = useRouter();

  useLayoutEffect(() => {
    const getSession = async () => {
      const hasValidSession = await checkUserSession();

      if (!hasValidSession) {
        router.replace('/login');
      }
    }
    getSession();
  }, [router]);

  const handleLogout = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/api/auth/logout', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (response.ok) {
      router.replace('/login');
    }
  };


  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();
  const [color, setColor] = useState<SidebarColor>('dark');

  return (
    <>
      {/* <div className='flex flex-col justify-between pr-2 bg-white border-r shadow-2xl w-80'>
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
        <div className='p-2' onClick={handleLogout}>
          <Image width={28} height={28} src={'/images/logout.png'} alt="profile pic" className="cursor-pointer rounded-xl" />
        </div>
      </div> */}
      <Sidebar
        color={color}
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
      >
        <Sidebar.Head>
          <Sidebar.Head.Title>Admin Panel</Sidebar.Head.Title>
          {/* <Sidebar.Head.Toggle /> */}
        </Sidebar.Head>

        <Sidebar.Nav>
          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Item icon={<RocketLaunch />} label="Dashboard" href="#" active>
              <Sidebar.Nav.Section isChild>
                <Sidebar.Nav.Section.Item icon={<Briefcase />} label="Distributors" href="#" />
                <Sidebar.Nav.Section.Item icon={<Briefcase />} label="Retailers" href="#" />
              </Sidebar.Nav.Section>
            </Sidebar.Nav.Section.Item>
          </Sidebar.Nav.Section>

          <Sidebar.Separator />

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Management</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item icon={<Users />} label="Users" as="button">
              <Sidebar.Nav.Section isChild>
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 bg-transparent rounded" />}
                  label="List all"
                  href="#"
                />
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 bg-transparent rounded" />}
                  label="Add new"
                  href="#"
                />
              </Sidebar.Nav.Section>
            </Sidebar.Nav.Section.Item>
            <Sidebar.Nav.Section.Item icon={<Key />} label="Permissions" href="#" />
            <Sidebar.Nav.Section.Item icon={<Sliders />} label="Settings" href="#" />
          </Sidebar.Nav.Section>

          <Sidebar.Separator />

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Support</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item icon={<LifeRing />} label="Contact" href="#" />
            <Sidebar.Nav.Section.Item icon={<EnvelopeOpen />} label="Tickets" href="#" />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>

        <Sidebar.Footer className='flex justify-start'>
          <div className='flex p-2' onClick={handleLogout} >
            <Image width={28} height={28} src={'/images/logout.png'} alt="profile pic" className="cursor-pointer rounded-xl" />
          </div>
        </Sidebar.Footer>
      </Sidebar>
    </>
  )
}

export default SidebarComponent