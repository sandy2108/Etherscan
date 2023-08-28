import Data from "../components/Data";
import SearchBar from "../components/SearchBar";
import LatestTransaction from "../components/LatestTransaction";
import LatestBlock from "../components/LatestBlock";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <Data />
      <section className="max-w-[1380px] mx-auto px-4 bg-[#fbfbfe]">
        <div className="grid md:grid-cols-2 gap-3 mb-10">
          <LatestBlock />
          <LatestTransaction />
        </div>
      </section>
    </div>
  );
}
