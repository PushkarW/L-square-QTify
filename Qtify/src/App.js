import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import { fetchTopAlbums } from "./api/api";
// import Card from "./component/Card/Card";
import Section from "./component/Section/Section";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbumsData = async () => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateTopAlbumsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
      </div>
    </div>
  );
}

export default App;
