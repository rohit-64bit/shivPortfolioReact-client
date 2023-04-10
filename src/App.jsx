import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import * as React from 'react';
import { Suspense } from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import AdminRoute from '../src/routes/AdminRoute'
import ScrollToTop from './components/ScrollToTop'
import Popup from './components/Popup'
import { SERVER_URL } from './services/helper'
import Loading from './components/Loading';
import MainState from './context/mainState'
import Notification from './components/Notification'


const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Blog = React.lazy(() => import('./pages/Blog'))
const Read = React.lazy(() => import('./pages/Read'))
const Video = React.lazy(() => import('./pages/Video'))
const Watch = React.lazy(() => import('./pages/Watch'))
const Portfolio = React.lazy(() => import('./pages/Portfolio'))


const AdminHome = React.lazy(() => import('./pages/admin/AdminHome'))
const AdminBlog = React.lazy(() => import('./pages/admin/AdminBlog'))
const Admin = React.lazy(() => import('./pages/admin/Admin'))
const AdminBlogEdit = React.lazy(() => import('./pages/admin/AdminBlogEdit'))
const AdminVideo = React.lazy(() => import('./pages/admin/AdminVideo'))
const AdminPortfolio = React.lazy(() => import('./pages/admin/AdminPortfolio'))
const AdminContact = React.lazy(() => import('./pages/admin/AdminContact'))
const AdminManageAccount = React.lazy(() => import('./pages/admin/AdminManageAccount'))
const NotFound = React.lazy(() => import('./pages/NotFound'))


function App() {

  const createAnalytics = async () => {
    const response = await fetch(`${SERVER_URL}/api/analytics/createVisit`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ data: "stats logged" })
    })
  }

  useEffect(() => {
    createAnalytics();
  }, [])


  return (
    <>
      <MainState>


        <Header />
        <Popup />

        <ScrollToTop />

        <Routes>

          {/* public routes */}
          <Route path="/" element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }></Route>

          <Route path="/about" element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }></Route>

          <Route path="/portfolio" element={
            <Suspense fallback={<Loading />}>
              <Portfolio />
            </Suspense>
          }></Route>

          <Route path="/contact" element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }></Route>

          <Route path="/blog" element={
            <Suspense fallback={<Loading />}>
              <Blog />
            </Suspense>
          }></Route>

          <Route path="/read" element={
            <Suspense fallback={<Loading />}>
              <Read />
            </Suspense>
          }></Route>

          <Route path="/video" element={
            <Suspense fallback={<Loading />}>
              <Video />
            </Suspense>
          }></Route>

          <Route path="/watch" element={
            <Suspense fallback={<Loading />}>
              <Watch />
            </Suspense>
          }></Route>



          {/* admin routes */}

          <Route path="/admin" element={
            <Suspense fallback={<Loading />}>
              {localStorage.getItem('adminToken') ?
                <AdminHome />
                :
                <Admin />
              }
            </Suspense>
          }></Route>


          <Route path="/admin/home" element={
            <Suspense fallback={<Loading />}>
              <AdminRoute >
                <AdminHome />
              </AdminRoute>
            </Suspense>
          }></Route>

          <Route path="/admin/blogs" element={
            <Suspense fallback={<Loading />}>
              <AdminRoute >
                <AdminBlog />
              </AdminRoute>
            </Suspense>
          }></Route>

          <Route path="/admin/editblog" element={
            <Suspense fallback={<Loading />}>
              <AdminRoute >
                <AdminBlogEdit />
              </AdminRoute>
            </Suspense>
          }></Route>

          <Route path="/admin/videos" element={
            <Suspense fallback={<Loading />}>
              <AdminRoute >
                <AdminVideo />
              </AdminRoute>
            </Suspense>
          }></Route>

          <Route path="/admin/portfolio" element={
            <Suspense fallback={<Loading />}>
              <AdminRoute >
                <AdminPortfolio />
              </AdminRoute>
            </Suspense>
          }></Route>

          <Route path="/admin/contact" element={
            <Suspense fallback={<Loading />}>
              <AdminRoute >
                <AdminContact />
              </AdminRoute>
            </Suspense>
          }></Route>

          <Route path="/admin/settings" element={
            <Suspense fallback={<Loading />}>
              <AdminRoute >
                <AdminManageAccount />
              </AdminRoute>
            </Suspense>
          }></Route>

          <Route path='*' element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }></Route>

        </Routes>

        <Notification />

        <Footer />

      </MainState>
    </>
  )
}

export default App
