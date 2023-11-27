import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './tailwind.css'
import Footer from './components/footer/Footer'
import Navbar from './components/nabar/Navbar'
import Home from './pages/home/Home'
import AboutUs from './pages/about/AboutUs'
import Contact from  './pages/contactNous/Contact'
import Blogdetail from './pages/blog/blogdetail/Blogdetail'
import Main from './pages/blog/Main'
import Project1 from './pages/project/project1/Project1'; // Adjust the extension if needed
import Project2 from './pages/project/project2/Project2'
import Project3 from './pages/project/project3/Project3'
import Project4 from './pages/project/project4/Project4'



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contactNous' element={<Contact />} />
          <Route path='/blog' element={<Main />} />
          <Route path="/blogdetail/:postId" element={<Blogdetail/>} /> 
          <Route path='/project/project1' element={<Project1 />} />
          <Route path='/project/project2' element={<Project2 />} />
          <Route path='/project/project3' element={<Project3 />} />
          <Route path='/project/project4' element={<Project4 />} />




        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
