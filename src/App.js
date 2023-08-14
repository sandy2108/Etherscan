
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Data from './components/Data';
import LatestTransaction from './components/LatestTransaction';
import LatestBlock from './components/LatestBlock';
import Footer from './components/Footer';


function App() {
  return (
      <>
        <Navbar/>
        <SearchBar/>
        <Data/>
        <section className="max-w-[1380px] mx-auto px-4 bg-[#fbfbfe]">
          <div className='grid md:grid-cols-2 gap-3 mb-10'>
            <LatestBlock/>
            <LatestTransaction/>
          </div>
        </section>
        <Footer/>
       
      </>
  ) 
  }
export default App;
