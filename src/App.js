import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import TitlePage from './Components/TitlePage/TitlePage';
import Parallax from './Components/Parallax/Parallax';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div id='outer-div'>
      <section id='home'>
        <NavBar />
        <TitlePage />
      </section>
      <section id='skills'>
        <Parallax text='Skills?' type='Skills' />
      </section>
      <section>
        <Skills />
      </section>
      <section id='projects'>
        <Parallax text='Projects' type='Projects' />
      </section>
      <section>
        <Projects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
