import React, { Suspense } from 'react';
import Home from './pages/Shared/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TopBar from './pages/Shared/TopBar';
import WebLayout from './layouts/WebLayout';
import Contact from './pages/Shared/Contact';
import About from './pages/Shared/About';
import Loader from './components/Loader';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route element={<WebLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About/>}/>

            </Route>
          </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;