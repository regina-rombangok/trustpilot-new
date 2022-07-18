import React, { useState } from "react";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/Home.css";
import CategoryTile from "../components/CategoryTile";
import banksIcon from "../assets/category_tiles/banks.svg";
import travelIcon from "../assets/category_tiles/travel_insurance.svg";
import carDealerIcon from "../assets/category_tiles/car_dealer.svg";
import furnitureStoreIcon from "../assets/category_tiles/furniture_store.svg";
import jewelryStoreIcon from "../assets/category_tiles/jewelry_store.svg";
import clothingStoreIcon from "../assets/category_tiles/clothing_store.svg";
import electronicsTechnologyIcon from "../assets/category_tiles/electronics_technology.svg";
import fitnessNutritionCenterIcon from "../assets/category_tiles/fitness_nutrition_center.svg";
import petStoreIcon from "../assets/category_tiles/pet_store.svg";
import energeSupplierIcon from "../assets/category_tiles/energy_supplier.svg";
import realEstateIcon from "../assets/category_tiles/real_estate_agents.svg";
import insuranceAgencyIcon from "../assets/category_tiles/insurance_agency.svg";
import bedroomFurnitureIcon from "../assets/category_tiles/bedroom_furniture.svg";
import activeWearIcon from "../assets/category_tiles/activewear.svg";
import womenClothingIcon from "../assets/category_tiles/womens_clothing_store.svg";
import menClothingIcon from "../assets/category_tiles/mens_clothing_store.svg";
import bicycleStoreIcon from "../assets/category_tiles/bicycle_shop.svg";
import shoeStoreIcon from "../assets/category_tiles/shoe_store.svg";
import mortgageBrokerIcon from "../assets/category_tiles/mortgage_broker.svg";
import applianceStoreIcon from "../assets/category_tiles/appliance_store.svg";
import cosmeticsStoreIcon from "../assets/category_tiles/cosmetics_store.svg";
import electonicsStoreIcon from "../assets/category_tiles/electronic_store.svg";
import gardenCenterIcon from "../assets/category_tiles/garden_center.svg";
import travelAgencyIcon from "../assets/category_tiles/travel_agency.svg";
import RecentReviewCard from "../components/RecentReviewCard";
import { recentReviews } from "../data/recentReviews";
import Marquee from "react-fast-marquee";
import PersonalStory from "../components/PersonalStory";

function Home() {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <Header />
      <div className="Content-container">
        <div className="Hero-section">
          <h1 className="Hero-title">
            Behind every review is an experience that matters
          </h1>
          <p className="Hero-subtitle">
            Read reviews. Write reviews. Find companies.
          </p>
          <div className="Hero-input-wrapper">
            <input
              type="text"
              className="Hero-search"
              name="search"
              value={keyword}
              placeholder="Company or Category or Product"
              onChange={(event) => setKeyword(event.currentTarget.value)}
            />
            <button
              className="Hero-search-button"
              onClick={() => console.log("search button clicked!")}
            >
              Search
            </button>
          </div>
        </div>
        <div className="Categories-section">
          <div className="Categories-explore-wrapper">
            <p className="Categories-explore-label">Explore categories</p>
            <button
              className="Categories-viewall-button"
              onClick={() => console.log("view all button clicked!")}
            >
              View all
            </button>
          </div>
          <Carousel infiniteLoop autoPlay>
            <div className="Carousel-wrapper">
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={travelIcon} label="Travel Insurance" />
              <CategoryTile icon={carDealerIcon} label="Car Dealer" />
              <CategoryTile icon={furnitureStoreIcon} label="Furniture Store" />
              <CategoryTile icon={jewelryStoreIcon} label="Jewelry Store" />
              <CategoryTile icon={clothingStoreIcon} label="Clothing Store" />
              <CategoryTile
                icon={electronicsTechnologyIcon}
                label="Electronics & Technology"
              />
              <CategoryTile
                icon={fitnessNutritionCenterIcon}
                label="Fitness & Nutrition"
              />
              <CategoryTile icon={petStoreIcon} label="Pet Store" />
              <CategoryTile icon={energeSupplierIcon} label="Energy Supplier" />
              <CategoryTile icon={realEstateIcon} label="Real Estate Agents" />
              <CategoryTile
                icon={insuranceAgencyIcon}
                label="Insurance Agency"
              />
            </div>
            <div className="Carousel-wrapper">
              <CategoryTile
                icon={bedroomFurnitureIcon}
                label="Bedroom Furniture Store"
              />
              <CategoryTile icon={activeWearIcon} label="Activewear Store" />
              <CategoryTile
                icon={womenClothingIcon}
                label="Women's Clothing Store"
              />
              <CategoryTile
                icon={menClothingIcon}
                label="Men's Clothing Store"
              />
              <CategoryTile icon={bicycleStoreIcon} label="Bicycle Store" />
              <CategoryTile icon={shoeStoreIcon} label="Shoe Store" />
              <CategoryTile icon={mortgageBrokerIcon} label="Mortgage Broker" />
              <CategoryTile icon={applianceStoreIcon} label="Appliance Store" />
              <CategoryTile icon={cosmeticsStoreIcon} label="Cosmetics Store" />
              <CategoryTile
                icon={electonicsStoreIcon}
                label="Electronics Store"
              />
              <CategoryTile icon={gardenCenterIcon} label="Garden Center" />
              <CategoryTile icon={travelAgencyIcon} label="Travel Agency" />
            </div>
          </Carousel>
        </div>
        <div className="RecentReviews-section">
          <h2 className="RecentReviews-title">Recent Reviews</h2>
          <Marquee pauseOnHover gradient={false}>
            <div className="RecentReviews-content">
              {[0, 1, 2, 3, 4].map((i) => (
                <div style={{ margin: "0 8px" }}>
                  <RecentReviewCard
                    star={recentReviews[i * 2].star}
                    author={recentReviews[i * 2].author}
                    company={recentReviews[i * 2].company}
                    content={recentReviews[i * 2].content}
                  />
                  <RecentReviewCard
                    star={recentReviews[i * 2 + 1].star}
                    author={recentReviews[i * 2 + 1].author}
                    company={recentReviews[i * 2 + 1].company}
                    content={recentReviews[i * 2 + 1].content}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
        <div className="WhatWeDo-section">
          <div>
            <h1 className="WhatWeDo-title">
              Be heard
            </h1>
            <p className="WhatWeDo-subtitle">
              Trustpilot is a review platform that’s open to everyone. Share your experiences to help others make better choices and encourage companies to up their game.
            </p>
            <button
              className="WhatWeDo-button"
              onClick={() => console.log("What we do button clicked!")}
            >
              What we do
            </button>
          </div>
          <div className="Transparency-green-wrapper">
            <h1 className="Transparency-title">
              Our 2022 Transparency Report has landed
            </h1>
            <p className="WhatWeDo-subtitle">
              We’re looking back on a year unlike any other. Read about how we ensure our platform’s integrity.
            </p>
            <button
              className="Take-a-look-button"
              onClick={() => console.log("Take a look button clicked!")}
            >
              Take a look
            </button>
          </div>
        </div>
        <div className="YourStories-section">
          <h3 className="YourStories-title">Your stories</h3>
          <h2 className="YourStories-subtitle">Each review has a personal story</h2>
          <PersonalStory />
        </div>
      </div>
    </div>
  );
}

export default Home;
