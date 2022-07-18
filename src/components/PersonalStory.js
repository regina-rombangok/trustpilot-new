import { useState } from "react";
import "../styles/PersonalStory.css";
import star1 from "../assets/stars/stars-1.svg";
import star2 from "../assets/stars/stars-2.svg";
import star3 from "../assets/stars/stars-3.svg";
import star4 from "../assets/stars/stars-4.svg";
import star5 from "../assets/stars/stars-5.svg";
import featuredReviewGreen from "../assets/featured-review-green.jpg";
import featuredReviewPink from "../assets/featured-review-pink.jpg";
import featuredReviewBlue from "../assets/featured-review-blue.jpg";
import { featuredReviews } from "../data/featuredReviews";

function PersonalStory() {
  const [index, setIndex] = useState(0);

  return (
    <div className="FeaturedReview-wrapper">
      <img
        src={
          index === 0
            ? featuredReviewGreen
            : index === 1
            ? featuredReviewPink
            : featuredReviewBlue
        }
        alt="featured-review-green"
        className="FeaturedReview-image"
      />
      <div className="FeaturedReview-content">
        {featuredReviews[index].star === 1 && (
          <img src={star1} alt="1 star" className="FeaturedReview-star" />
        )}
        {featuredReviews[index].star === 2 && (
          <img src={star2} alt="2 stars" className="FeaturedReview-star" />
        )}
        {featuredReviews[index].star === 3 && (
          <img src={star3} alt="3 stars" className="FeaturedReview-star" />
        )}
        {featuredReviews[index].star === 4 && (
          <img src={star4} alt="4 stars" className="FeaturedReview-star" />
        )}
        {featuredReviews[index].star === 5 && (
          <img src={star5} alt="5 stars" className="FeaturedReview-star" />
        )}
        <p className="FeaturedReview-text">{featuredReviews[index].content}</p>
        <p className="FeaturedReview-author">
          <b>{featuredReviews[index].author}</b> experienced{" "}
          <b>{featuredReviews[index].company}</b>
        </p>
      </div>
      <div
        className={`FeaturedReview-GeneralBtn ${
          index === 0
            ? "FeaturedReview-Bg0"
            : index === 1
            ? "FeaturedReview-Bg1"
            : "FeaturedReview-Bg2"
        }`}
        onClick={() => setIndex(index + 1 > 2 ? 0 : index + 1)}
      >
        {">"}
      </div>
      <div
        className={`FeaturedReview-GeneralBtn FeaturedReview-SecondBtn ${
          index === 0
            ? "FeaturedReview-Bg1"
            : index === 1
            ? "FeaturedReview-Bg2"
            : "FeaturedReview-Bg0"
        }`}
        onClick={() => setIndex(index - 1 < 0 ? 2 : index - 1)}
      >
        {"<"}
      </div>
    </div>
  );
}

export default PersonalStory;
