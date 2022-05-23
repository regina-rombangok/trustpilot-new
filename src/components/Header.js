import '../styles/Header.css';
import logoWhite from '../assets/logo-white.svg';

function Header() {
  return (
    <div className="Header-container">
      <img src={logoWhite} alt="logo-white" width="140" height="35" />
      <div className="Menu-container">
        <div className="Menu-button">
          Categories
        </div>
        <div className="Menu-button">
          Blogs
        </div>
        <div className="Menu-button">
          Log In
        </div>
      </div>
    </div>
  );
}

export default Header;
