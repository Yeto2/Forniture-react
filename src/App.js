import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Herodata from './data/hero'
import Popular from './components/Popular';
import Populardata from './data/popular'

function App() {
  let heroSection = Herodata.map((item)=>{
      return (
        <Hero 
                  key={item.id}
                  {...item}
              />
      )
  })
  let popularSection = Populardata.map((item)=>{
    return (
      <Popular
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
        
    </>
  );
}

export default App;
