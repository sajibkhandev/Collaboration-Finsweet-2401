import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Feature from './pages/Feature';
import Work from './pages/Work';
import Read from './pages/Read';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/work" element={<Work />}></Route>
    <Route path="/feature" element={<Feature />}></Route>
    <Route path="/read" element={<Read />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
    <Route path="/pricing" element={<Pricing />}></Route>
    
    </>
  )
);


const App = () => {
  return (
   <RouterProvider router={router} />

    
  )
}

export default App