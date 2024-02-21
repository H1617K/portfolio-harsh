import './App.css';
import { Contact } from './components/Contact/Contact.js';
import { Footer } from './components/Footer/Footer.js';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './styles/global.ts';

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Header></Header>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
