import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Herodata from './data/hero'

function App() {
  let heroSection = Herodata.map((item)=>{
      return (
        <Hero 
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
