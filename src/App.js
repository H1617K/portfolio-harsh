import './App.css';
import { Footer } from './components/Footer/Footer.js';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './styles/global.ts';

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Header></Header>
    <Footer></Footer>
    </>
  );
}

export default App;
