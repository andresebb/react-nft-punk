import React, { useState, useEffect } from "react";

import "./Main.css";
import instagramLogo from "../assets/assets/owner/instagram.png";
import twitterLogo from "../assets/assets/owner/twitter.png";
import moreIcon from "../assets/assets/owner/more.png";

export const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  // console.log(activePunk);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighLight">
          {activePunk.image_url && (
            <div className="punkContainer">
              <img className="selectedPunk" src={activePunk.image_url} alt="" />
            </div>
          )}
        </div>

        <div className="PunkDetailsContainer">
          <div className="punkDetails">
            <div className="title">{activePunk.name}</div>
            <span className="itemNumber">#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerInfo">
              <div className="ownerImageContainer">
                <img src={activePunk.owner.profile_img_url} alt="" />
              </div>
              <div className="ownerDetails">
                <div className="ownerNameAndHandle">
                  <div className="ownerAdress">{activePunk.owner.address} </div>
                  <div className="ownerHandle">@chiguireCode</div>
                </div>
              </div>
            </div>
            <div className="social">
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
