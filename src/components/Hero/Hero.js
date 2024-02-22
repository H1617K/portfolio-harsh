import { BrowserRouter } from "react-router-dom";
import { AnimatedContainer } from "../Hero/styles.ts";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import Hello from '../../assets/Hello.gif';
import telegram from '../../assets/telegram.svg';



export function Hero() {
  return (
    <BrowserRouter>
      <AnimatedContainer id="home">
        <div className="hero-text">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
          <h1>Harsh Raval</h1>
          <h3>React Js Developer</h3>
          <p className="small-resume">1 Years of Experience</p>
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
          <br/>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/harsh-raval-92a7321a2/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/H1617K/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B919104868884&text=Hello+Harsh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://web.telegram.org/a/#901894708"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={Illustration} alt="Ilustração" />
        </div>
      </AnimatedContainer>
    </BrowserRouter>
  );
}
