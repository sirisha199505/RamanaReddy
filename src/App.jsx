import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import Films from './pages/Films'
import Ott from './pages/Ott'
import Television from './pages/Television'
import Theatre from './pages/Theatre'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="films" element={<Films />} />
          <Route path="ott" element={<Ott />} />
          <Route path="television" element={<Television />} />
          <Route path="theatre" element={<Theatre />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
