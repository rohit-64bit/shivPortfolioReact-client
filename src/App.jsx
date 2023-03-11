import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import Read from './pages/Read'
import Video from './pages/Video'
import ScrollToTop from './components/ScrollToTop'
import Watch from './pages/Watch'
import Portfolio from './pages/Portfolio'


import AdminRoute from '../src/routes/AdminRoute'
import AdminHome from './pages/admin/AdminHome'
import AdminBlog from './pages/admin/AdminBlog'
import Admin from './pages/admin/Admin'
import AdminBlogEdit from './pages/admin/AdminBlogEdit'
import AdminVideo from './pages/admin/AdminVideo'
import MainState from './context/mainState'
import Notification from './components/Notification'
import AdminPortfolio from './pages/admin/AdminPortfolio'
import AdminContact from './pages/admin/AdminContact'
import AdminManageAccount from './pages/admin/AdminManageAccount'
import Popup from './components/Popup'
import { SERVER_URL } from './services/helper'
import { useEffect } from 'react';
import NotFound from './pages/NotFound';


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
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/video" element={<Video />}></Route>
          <Route path="/watch" element={<Watch />}></Route>


          {/* admin routes */}

          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/home" element={<AdminRoute > <AdminHome /></AdminRoute>}></Route>
          <Route path="/admin/blogs" element={<AdminRoute > <AdminBlog /></AdminRoute>}></Route>
          <Route path="/admin/editblog" element={<AdminRoute > <AdminBlogEdit /></AdminRoute>}></Route>
          <Route path="/admin/videos" element={<AdminRoute > <AdminVideo /></AdminRoute>}></Route>
          <Route path="/admin/portfolio" element={<AdminRoute > <AdminPortfolio /></AdminRoute>}></Route>
          <Route path="/admin/contact" element={<AdminRoute > <AdminContact /></AdminRoute>}></Route>
          <Route path="/admin/settings" element={<AdminRoute > <AdminManageAccount /></AdminRoute>}></Route>

          <Route path='*' element={<NotFound />}></Route>

        </Routes>
        <Notification />
        <Footer />

      </MainState>
    </>
  )
}

export default App
