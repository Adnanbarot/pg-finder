import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import PGCard from "./components/PGCard";

const pglistings = [
  {
    name: "Comfort PG",
    location: "Andheri, Mumbai",
    price: "8500",
    type: "Boys PG",
  },
  {
    name: "Urban Stay",
    location: "Powai, Mumbai",
    price: "10000",
    type: "Girls PG",
  },
  {
    name: "Jantar-Mantar",
    location: "Ring Road, Delhi",
    price: "10000",
    type: "Girls PG",
  },
  {
    name: "Halal Haven",
    location: "Bhiwandi, Mumbai",
    price: "NA",
    type: "Boys Only",
  },
  {
    name: "Green View Hostel",
    location: "Viman Nagar, Pune",
    price: "7500",
    type: "Co-ed Hostel",
  },
];

function App() {
  const [searchLocation, setSearchLocation] = useState("");

  const filteredPGs = pglistings.filter((pg) =>
    pg.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  function handleSearch(searchLocation) {
    setSearchLocation(searchLocation);
    console.log("Searching for:", searchLocation);
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBox onSearch={handleSearch} />

      <section>
        <h2>Available PGs</h2>

        <div className="pg-list">
          {filteredPGs.map((pg) => (
            <PGCard
              key={pg.name}
              name={pg.name}
              location={pg.location}
              price={pg.price}
              type={pg.type}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;