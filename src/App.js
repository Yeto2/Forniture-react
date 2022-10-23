import "./App.css";
//* data
import Herodata from "./data/hero";
import arrivaldata from "./data/newarrival";
//* components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Newarrival from "./components/Newarrival";
import Collection from "./components/Collection";


function App() {
  let heroSection = Herodata.map((item) => {
    return <Hero key={item.id} {...item} />;
  });
  let arrivalSection = arrivaldata.map((item) => {
    return <Newarrival key={item.id} {...item} />;
  });

  return (
    <>
      <Navbar />

      <div className="owl-carousel container my-4">
        {heroSection}
      </div>

      <div className="cont">
        <Popular />
      </div>

      <div className="cont-arrival">
        <div className="container row">
          <h2 className="section-head">New Arrivals</h2>
          {arrivalSection}
        </div>
      </div>

      <div className="cont-collection">
      <Collection />
      </div>
    </>
  );
}

export default App;
