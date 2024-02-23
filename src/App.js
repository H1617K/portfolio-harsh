import './App.css';
import { Footer } from './components/Footer/Footer.js';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main.js';
import { GlobalStyle } from './styles/global.ts';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    </>
  );
}

export default App;
