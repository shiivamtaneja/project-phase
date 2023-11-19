/* eslint-disable */
import { lazy } from 'react';
import './App.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Layout from './layouts/Layout';

import Home from './pages/Home';

const Error = lazy(() => import('./pages/Error'));
const HotDeals = lazy(() => import('./pages/Deals/HotDeals'));
const AboutUs = lazy(() => import('./pages/About/AboutUs'));
const Search = lazy(() => import('./pages/Search/Search'));
const ProductPage = lazy(() => import('./pages/Product/ProductPage'));
const Compare = lazy(() => import('./pages/Compare/Compare'));

import { loader as searchLoader } from './components/pageProps/shopPage/Pagination.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import RegisterPage from './pages/Register/RegisterPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/search'>
        <Route index loader={searchLoader} element={<Search prevLocation='' location="Search" />} />
        <Route path=':productName/:productId' loader={searchLoader} element={<Search prevLocation='' location="Search" />} />
      </Route>
      <Route path='/bikes'>
        <Route path=':productNew' loader={searchLoader} element={<Search prevLocation='Bikes' location="New Bikes" />} />
        <Route path='used' element={"used"} />
      </Route>
      <Route path='/deals' element={<HotDeals />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/compare' element={<Compare />} />
      <Route path='/products/:companyName/:name/:productId' loader={searchLoader} element={<ProductPage />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
