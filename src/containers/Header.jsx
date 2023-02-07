import React from 'react'
import './Header.css'

// assets
import { navItems } from '../assets/constantes/const'
import NavItem from '../components/NavItem'

const Header = () => {


    return(
        <header>
            <nav>
                {navItems.map(navItem => {
                    return(
                        < NavItem key={navItem.name} path={navItem.path} > {navItem.name} </ NavItem>
                    )
                })}
            </nav>
        </header>
    )
}

export default Header