import { Container} from '../Footer/styles.ts'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {

    return(

      <Container className="Footer">
        <a href='https://HarshRaval.in' className='logo'>
          <samp>www.harsh</samp>
          <span>raval.in</span>
        </a>
        <div>
          <p> 
            This Website was made with react <img src={reactIcon} alt='React' />
          </p>
        </div>

        <div className='social-media'>
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
          <a
            href="https://www.instagram.com/who.harsh._/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </Container>
    )
}