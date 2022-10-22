import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Herodata from './data/hero'
import Popular from './components/Popular';
import Newarrival from './components/Newarrival';
import arrivaldata from './data/newarrival';



function App() {
  let heroSection = Herodata.map((item)=>{
      return (
        <Hero 
                  key={item.id}
                  {...item}
              />
      )
  })
  let arrivalSection = arrivaldata.map((item)=>{
    return (
      <Newarrival 
                key={item.id}
                {...item}
            />
    )
})

  return (
    <>
    <Navbar />
      <div className='owl-carousel container my-4'>
        {heroSection}
      </div>
      <div className='cont'>
        <Popular />
      </div>

      <div className='cont'>
        <div className='container row'>
        <h2>New Arrivals</h2>
        {arrivalSection}
      </div>
      </div>
      
        
    </>
  );
}

export default App;
