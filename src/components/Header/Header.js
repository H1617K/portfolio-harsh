import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import { Container} from '../Header/styles.ts'

import CV from '../../assets/Harsh Raval Resume.pdf'

export function Header () {
    const [isActive, setActive] = useState(false);

    function toggleThme() {
        let html = document.getElementsByTagName('html')[0]
        html.classList.toggle('light')
    }

    function closeMenu() {
        setActive(false)
    }


    return(
        <Container classList="header-fixed">
            <Router>
                <HashLink smooth to="home" className='logo'>
                    <span>{"Harsh"}</span>
                    <span>{"Raval"}</span>
                </HashLink>

                <input 
                    onChange={toggleThme}
                    className='container_toggle'
                    type='checkbox'
                    id='switch'
                    name='mode'
                />

                <label htmlFor='switch'>Toggle</label>

                <nav className={isActive ? 'active' : ''}>
                    <NavHashLink smooth to="#home" onClick={closeMenu}>
                        Home
                    </NavHashLink>
                    <NavHashLink smooth to="#about" onClick={closeMenu}>
                        About me
                    </NavHashLink>
                    <NavHashLink smooth to="#project" onClick={closeMenu}>
                        Project
                    </NavHashLink>
                    <NavHashLink smooth to="#contact" onClick={closeMenu}>
                        Contact
                    </NavHashLink>
                    <a href={CV} download className='button'>
                        CV
                    </a>
                </nav>

                <div
                    aria-expanded={isActive ? 'true' : 'false'}
                    aria-haspopup="true"
                    aria-label={isActive ? 'fechar menu' : 'Abrir menu'}
                    className={isActive ? 'menu active' : 'menu'}
                    onClick={() =>{
                        setActive(!isActive)
                    }}
                ></div>
            </Router>
        </Container>
    )
}