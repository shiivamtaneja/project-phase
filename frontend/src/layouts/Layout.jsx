/* eslint-disable */
import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import HeaderBottom from '../components/Header/HeaderBottom';
import SideNav from '../components/Navbar/SideNav';
import ScrollToTop from '../components/ScrollToTop.jsx';
import CardSkeleton from '../components/pageProps/Skeleton/CardSkeleton';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <SideNav />
      <Header />
      <HeaderBottom />
      <Suspense fallback={<CardSkeleton />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default Layout