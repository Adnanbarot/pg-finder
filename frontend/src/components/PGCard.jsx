import "./PGCard.css";
function PGCard({ name, location, price, type }) {
  return (
    <div className="pg-card">
      <h3>Comfort PG</h3>

      <p>📍 {location}</p>
      <p>💰 {price}</p>
      <p>🏠 {type}</p>

      <button>View Details</button>
    </div>
  );
}

export default PGCard;