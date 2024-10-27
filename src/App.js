import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import CRousal from './components/CRousal';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Home from './components/Home';

function App() {
  return (

    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a' element={<About />} />
        <Route path='/cr' element={<CRousal />} />
        <Route path='/s' element={<Skills />} />
        <Route path='/p' element={<Project />} />
        <Route path='/c' element={<Contact />} />
        <Route path='/t' element={<Tools />} />
      </Routes>


    </>
  );
}

export default App;
