import "../styles/PersonalStory.css";
import star1 from "../assets/stars/stars-1.svg";
import star2 from "../assets/stars/stars-2.svg";
import star3 from "../assets/stars/stars-3.svg";
import star4 from "../assets/stars/stars-4.svg";
import star5 from "../assets/stars/stars-5.svg";

function PersonalStory({ image, data }) {
  const { author, company, content, star } = data;

  return (
    <div className="FeaturedReview-wrapper">
      <img
        src={image}
        alt="featured-review-green"
        className="FeaturedReview-image"
      />
      <div className="FeaturedReview-content">
        {star === 1 && <img src={star1} alt="1 star" className="FeaturedReview-star" />}
        {star === 2 && (
          <img src={star2} alt="2 stars" className="FeaturedReview-star" />
        )}
        {star === 3 && (
          <img src={star3} alt="3 stars" className="FeaturedReview-star" />
        )}
        {star === 4 && (
          <img src={star4} alt="4 stars" className="FeaturedReview-star" />
        )}
        {star === 5 && (
          <img src={star5} alt="5 stars" className="FeaturedReview-star" />
        )}
      </div>
    </div>
  );
}

export default PersonalStory;
