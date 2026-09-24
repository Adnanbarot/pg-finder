import "./SearchBox.css";
function SearchBox() {
  return (
    <section className="search-box">
      <h2>Find your perfect stay</h2>

      <input
        type="text"
        placeholder="Enter location"
      />

      <input
        type="number"
        placeholder="Max budget"
      />

      <select>
        <option value="">Select stay type</option>
        <option value="pg">PG</option>
        <option value="hostel">Hostel</option>
      </select>

      <button>Search</button>
    </section>
  );
}

export default SearchBox;