import styles from "./NavBar.module.css"
import { ActiveLink } from "./ActiveLink";

interface MenuItem {
  text: string;
  href: string;
}



const menuItems: MenuItem[] = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {   
      text: 'Contact',
      href: '/contact'
  },
  {   
      text: 'Pricing',
      href: '/pricing'
  },
];


export const NavBar = () => {
  return (
    <nav className={ styles['menu-container']}>
      {
        menuItems.map( ({text, href}) =>(
            <ActiveLink key={href} text={ text}  href={href}/>
        ))
      }

        {/* <ActiveLink text="Home"  href="/"/>
        <ActiveLink text="About"  href="/about"/>
        <ActiveLink text="Contact" href="/contact"/>
        <ActiveLink text="Pricing" href="/pricing"/>  */}
    </nav>
  );
};
