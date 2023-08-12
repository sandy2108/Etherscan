import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Data from './components/Data';
import LatestTransaction from './components/LatestTransaction';
import LatestBlock from './components/LatestBlock';
import Footer from './components/Footer';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  return (
      <>
        <Navbar/>
        <SearchBar/>
        <Data/>
        <section className="max-w-[1340px] mx-auto px-4 bg-[#fbfbfe]">
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
