import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
// import Card from "./component/Card/Card";
import Section from "./component/Section/Section";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);

  const generateTopAlbumsData = async () => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumsData(data);
    } catch (err) {
      console.error(err);
    }
  };
  const generateNewAlbumsData = async () => {
    try {
      const data = await fetchNewAlbums();
      console.log(data);
      setNewAlbumsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateTopAlbumsData();
  }, []);

  useEffect(() => {
    generateNewAlbumsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
        <Section data={newAlbumsData} type="album" title="New Albums" />
      </div>
    </div>
  );
}

export default App;
