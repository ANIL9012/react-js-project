import logo from './logo.svg';
import './App.css';

import { ReactDOM } from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout1 from './Pages/Layouts/layout-1/layout-1.js';
import Home from "./Pages/Home/home.js"
import About from './Pages/About-Page/About-us.js';
import Contact from './Pages/Contact-page/contact-us.js';
import Service from './Pages/Services-page/service.js';
import Teampages from './Pages/Teampages/teampage.js';

 function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout1/>}>
      <Route index element={<Home/>} />
      <Route path="/About-us" element={<About/>}/>
      <Route path="/Contact-us" element={<Contact/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Our-Team" element={<Teampages/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
