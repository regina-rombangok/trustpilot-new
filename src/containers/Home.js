import React, {useState} from 'react';
import Header from '../components/Header';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../styles/Home.css';
import CategoryTile from '../components/CategoryTile';
import banksIcon from '../assets/banks.svg';

function Home() {
  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <Header />
      <div className="Content-container">
        <div>
          <h1 className="Hero-title">Behind every review is an experience that matters</h1>
          <p className="Hero-subtitle">Read reviews. Write reviews. Find companies.</p>
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
              onClick={() => console.log('search button clicked!')}
            >
              Search
            </button>
          </div>
        </div>
        <div className="Categories-section">
          <div className="Categories-explore-wrapper">
            <p className="Categories-explore-label">Explore categroies</p>
            <button
              className="Categories-viewall-button"
              onClick={() => console.log('view all button clicked!')}
            >
              View all
            </button>
          </div>
          <Carousel>
            <div className="Carousel-wrapper">
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
            </div>
            <div className="Carousel-wrapper">
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
              <CategoryTile icon={banksIcon} label="Banks" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
