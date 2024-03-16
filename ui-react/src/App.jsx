import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
const TopBar = lazy(() => import('./pages/Shared/TopBar'))
const WebLayout = lazy(() => import('./layouts/WebLayout'))
const Contact = lazy(() => import('./pages/Shared/Contact'));
const About = lazy(() => import('./pages/Shared/About'));
const Home = lazy(() => import('./pages/Shared/Home') )
const Courses = lazy(() => import('./pages/Shared/Courses') )

import Loader from './components/Loader';
import Login from './pages/Shared/Login';
import Register from './pages/Shared/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<WebLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses/>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
           {/* <Route path="/*" element=*/}

          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
