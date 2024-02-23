import './App.css'
import './index.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Navbar } from './components/navbar'

import { Main } from './main/Main'
import { Login } from './pages/Login'
import { CreatePost } from './pages/create-post/createpost'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App

// router - 1 login page , 1 posts page with post, username,likes etc,
