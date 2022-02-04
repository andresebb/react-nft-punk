import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import axios from "axios";
import { PunkList } from "./components/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(4);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x85f9debFc2658546230f78FBbc666928B51CFf2C&order_direction=asc"
      );

      setPunkListData(openseaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="App">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
