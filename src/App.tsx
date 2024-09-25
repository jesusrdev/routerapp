import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Contact from './Contact'
import PageNotFount from './PageNotFount'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' | '}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
