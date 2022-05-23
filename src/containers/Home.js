import Header from '../components/Header';
import logo from '../logo.svg';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <Header />
      <div className="Content-container">
        <div>
          <h1 className="Hero-title">Behind every review is an experience that matters</h1>
          <p className="Hero-subtitle">Read reviews. Write reviews. Find companies.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
