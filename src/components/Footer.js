import '../styles/Footer.css';
import logoWhite from '../assets/logo-white.svg';

function Footer() {
  return (
    <div className="Footer-container">
      <img src={logoWhite} alt="logo-white" width="140" height="35" />
      <div className="Menu-container">
        <div className="Submenu-container">
          About
          <div className="Submenu-item">About us</div>
          <div className="Submenu-item">Jobs</div>
          <div className="Submenu-item">Contact</div>
          <div className="Submenu-item">Blog</div>
          <div className="Submenu-item">How Trustpilot works</div>
          <div className="Submenu-item">Transparency Report</div>
          <div className="Submenu-item">Press</div>
          <div className="Submenu-item">Investor Relations</div>
        </div>
        <div className="Submenu-container">
          Community
          <div className="Submenu-item">Trust in reviews</div>
          <div className="Submenu-item">Support Center</div>
          <div className="Submenu-item">Log in</div>
          <div className="Submenu-item">Sign up</div>
        </div>
        <div className="Submenu-container">
          Businesses
          <div className="Submenu-item">Trustpilot Business</div>
          <div className="Submenu-item">Products</div>
          <div className="Submenu-item">Plans & Pricing</div>
          <div className="Submenu-item">Business Login</div>
          <div className="Submenu-item">Blog for Business</div>
        </div>
      </div>
      <div className="Menu-container">
        <div className="Submenu-item">Legal</div>
        <div className="Submenu-item">Privacy Policy</div>
        <div className="Submenu-item">Terms & Conditions</div>
        <div className="Submenu-item">Guidelines for Reviewers</div>
        <div className="Submenu-item">System Status</div>
        <div className="Submenu-item">Cookie Preferences</div>
        <div className="Submenu-item">Modern Slavary Statement</div>
      </div>
    </div>
  );
}

export default Footer;
