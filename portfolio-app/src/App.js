import logo from './logo.svg';
import './App.scss';
import { ThemeProvider } from '@mui/material/styles';
import theme from './portfolioTheme';
import { motion } from 'framer-motion';
import { HomePage } from './Screens/HomePage';
import { Route, Routes } from 'react-router-dom';
import { About } from './Screens/About';
import NavBar from './Components/NavBar/NavBar';
import TitlePage from './Components/TitlePage/TitlePage';
import Parallax from './Components/Parallax/Parallax';
import Sidebar from './Components/Sidebar/Sidebar';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div id='outer-div'>
      <section>
        <NavBar />
        <TitlePage />
      </section>
      <section>
        <Parallax />
      </section>
      <section><Skills /></section>
      <section>Projects</section>
      <section>Contact</section>

      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
