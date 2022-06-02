import "../styles/RecentReviewCard.css";
import avatar from "../assets/avatar.png";
import star1 from "../assets/stars/stars-1.svg";
import star2 from "../assets/stars/stars-2.svg";
import star3 from "../assets/stars/stars-3.svg";
import star4 from "../assets/stars/stars-4.svg";
import star5 from "../assets/stars/stars-5.svg";

function RecentReviewCard({ star, author, content, company }) {
  return (
    <div className="Card-container">
      <div className="Flex-wrapper">
        <img
          src={avatar}
          alt="logo-white"
          width="40"
          height="40"
          className="Avatar"
        />
        {star === 1 && <img src={star1} alt="1 star" width="108" height="20" />}
        {star === 2 && (
          <img src={star2} alt="2 stars" width="108" height="20" />
        )}
        {star === 3 && (
          <img src={star3} alt="3 stars" width="108" height="20" />
        )}
        {star === 4 && (
          <img src={star4} alt="4 stars" width="108" height="20" />
        )}
        {star === 5 && (
          <img src={star5} alt="5 stars" width="108" height="20" />
        )}
      </div>
      <div className="Author-wrapper">
        <a href="/" target="_self" className="Author">
          {author}
        </a>
        {" reviewed "}
        <a href="/" target="_self" className="Author">
          {company}
        </a>
      </div>
      <div className="Content">{content}</div>
    </div>
  );
}

export default RecentReviewCard;
