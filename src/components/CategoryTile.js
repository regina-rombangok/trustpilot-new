import '../styles/CategoryTile.css';

function CategoryTile({icon, label}) {
  return (
    <div className="Tile-container">
      <img src={icon} alt="category-tile-icon" className="Tile-icon" />
      <p className="Tile-label">
        {label}
      </p>
    </div>
  );
}

export default CategoryTile;
