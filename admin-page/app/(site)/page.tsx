'use client';

import { Breadcrumbs, Button, Calendar, Overlay, useSidebar } from "@rewind-ui/core";

import React, { useState } from 'react';
import { RocketLaunch } from "../icons/RocketLaunch";


export default function Home() {

  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();

  return (
    <>
      <main
        className={`transition-all transform duration-300 text-slate-700 flex w-full min-h-screen flex-col items-center ${expanded ? 'md:ml-[16rem]' : 'md:ml-[4.5rem]'
          }`}
      >
        {mobile && (
          <Overlay
            blur="none"
            onClick={() => {
              sidebar.toggleMobile();
            }}
            className="z-40 md:hidden"
          />
        )}
        <header className="flex flex-row sticky top-0 px-8 items-center bg-white border-b border-b-gray-100 w-full shadow-sm min-h-[4rem]">
          <span>Navbar</span>

          <Button
            onClick={() => {
              sidebar.toggleMobile();
            }}
            size="sm"
            color="white"
            icon
            className="flex ml-auto md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M448 96c0-17.7-14.3-32-32-32H32C14.3 64 0 78.3 0 96s14.3 32 32 32H416c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z" />
              <path
                className="opacity-50"
                d="M0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
              />
            </svg>
          </Button>
        </header>

        <div className="w-full h-full p-8">
          <Breadcrumbs>
            <Breadcrumbs.Item href="/">
              <RocketLaunch />
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>Dashboard</Breadcrumbs.Item>
          </Breadcrumbs>

          <div className="mt-8">
            <Calendar />
          </div>
        </div>

        <div className="flex sticky bottom-0 items-center bg-white w-full min-h-[4rem] px-8">
          <span>Footer</span>
        </div>
      </main>
    </>
  )
}
