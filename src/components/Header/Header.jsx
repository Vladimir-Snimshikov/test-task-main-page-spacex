import logo from '../../images/spacex-logo.png';
import { Link } from 'react-router-dom';
import navItems from '../../utils/navItemsInfo';
import { memo, useEffect, useState } from 'react';
import classNames from '../../utils/classNames';

const {
  mobileMenu,
  mobileMenuSpan,
  header,
  headerImgWraper,
  headerNavIitem,
  headerNavBar,
  headerLogo,
  link,
} = classNames;

const MemoizedNavItem = memo(({ text, href, id }) => (
  <li key={id}>
    <Link className={`${headerNavIitem} ${link}`} to={href}>
      {text}
    </Link>
  </li>
));

function Header() {
  const [navbarIsOpen, setNavBarIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const span = <span className={mobileMenuSpan}></span>;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function toglleIsNavbar() {
    setNavBarIsOpen((state) => (windowWidth < 767 ? !state : state));
  }

  return (
    <header className={header}>
      <div onClick={toglleIsNavbar} className={headerImgWraper}>
        <div className={mobileMenu}>
          {span}
          {span}
          {span}
        </div>
        <img src={logo} className={headerLogo} alt="логотип Spase X"></img>
      </div>
      <nav>
        <ul
          className={`${headerNavBar} ${
            navbarIsOpen ? `${headerNavBar}_isopen` : ''
          }`}
        >
          {navItems.map(({ text, href, id }) => (
            <MemoizedNavItem key={id} text={text} href={href} id={id} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
