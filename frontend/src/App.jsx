import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import PGCard from "./components/PGCard";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBox />
      <section>
        <h2>Available PGs</h2>
        <div className="pg-list">
        <PGCard
        name="Comfort PG"
        location="Andheri, Mumbai"
        price="8500"
        type="Boys PG"
         />
        <PGCard
        name="Urban Stay"
        location="Powai,Mumbai"
        price="10000"
        type="Girls PG"
        />
        <PGCard
        name="Jantar-Mantar"
        location="Ring road,Delhi"
        price="10000"
        type="Girls PG"
        />
        <PGCard
        name="Halal Haven"
        location="Bhiwandi,whatsapp"
        price="NA"
        type="Boys Only!!!!"
        />
        <PGCard
        name="Green view hostel"
        location="Viman nagar,Pune"
        price="7500"
        type="Co-ed Hostel"
        />
        </div>
      </section>
    </div>
  );
}

export default App;