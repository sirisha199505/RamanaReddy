import { Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import Films from './pages/Films'
import Ott from './pages/Ott'
import Television from './pages/Television'
import Theatre from './pages/Theatre'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="films" element={<Films />} />
        <Route path="ott" element={<Ott />} />
        <Route path="television" element={<Television />} />
        <Route path="theatre" element={<Theatre />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
