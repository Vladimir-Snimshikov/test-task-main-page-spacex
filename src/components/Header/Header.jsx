import logo from '../../images/spacex-logo.png';
import { Link } from 'react-router-dom';
import navItems from '../../utils/navItemsInfo';

function Header() {
  function getNavItem(text, href, key) {
    return (
      <li key={key}>
        <Link className="header__nav-item link" to={href}>
          {text}
        </Link>
      </li>
    );
  }
  return (
    <header className="header">
      <div className="header__img-wraper">
        <img src={logo} alt="логотип Spase X"></img>
      </div>
      <nav>
        <ul className="header__nav-bar">
          {navItems.map(({ text, href, id }) => getNavItem(text, href, id))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
