import './App.css';
import { Contact } from './components/Contact/Contact.js';
import { Footer } from './components/Footer/Footer.js';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero.js';
import { GlobalStyle } from './styles/global.ts';

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Header></Header>
    <Hero></Hero>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
