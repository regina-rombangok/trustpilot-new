import '../styles/RecentReviewCard.css';
import avatar from '../assets/avatar.png';
import star5 from '../assets/stars/stars-5.svg';

function RecentReviewCard() {
  return (
    <div className="Card-container">
      <div className="Flex-wrapper">
        <img src={avatar} alt="logo-white" width="40" height="40" className="Avatar" />
        <img src={star5} alt="5 stars" width="108" height="20" />
      </div>
      <div className="Author-wrapper">
        <a href="/" target="_self" className="Author">Sharon Rutherford</a>
        {" reviewed "}
        <a href="/" target="_self" className="Author">Trustpilot</a>
      </div>
    </div>
  );
}

export default RecentReviewCard;
