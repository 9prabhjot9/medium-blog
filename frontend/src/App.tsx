import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blogs } from './pages/Blogs'
import { Blog } from './pages/Blog'
import { Navigate } from 'react-router-dom'
import { Profile } from './pages/Proflie'
import Publish from './pages/NewBlog'


function App() {

  return (
    <>
  
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={< Navigate to ="/signup"/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Publish" element={<Publish />} />
          <Route path="/Blog/:id" element={<Blog />} />
          <Route path="/Profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
