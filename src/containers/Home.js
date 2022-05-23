import React, {useState} from 'react';
import Header from '../components/Header';
import logo from '../logo.svg';
import '../styles/Home.css';

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
          <div className="Categories-explorer-wrapper">
            <p>Explore categroeis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
