import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import "./home.css";
import "./create.css";
import Steppr from "./stepper";
import { useEffect, useState } from "react";
import axios from "axios";
import Bottomnav from "./bottomnavbar";
import { SettingsApplicationsTwoTone } from "@mui/icons-material";
import { style } from "@mui/system";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { URL } from "../constants/userConstants";

const CaptainSelector = styled.div``;
const Player = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
  h1 {
    font-size: 16px;
    font-family: "Open Sans";
    width: 100px;
    text-transform: capitalize;
  }
`;

const CaptainC = styled.button`
  border: 2px solid #cccccc;
  border-radius: 50%;
  background-color: #ffffff;
  font-weight: 700;
  color: #cccccc;
  width: 30px;
  font-size: 16px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ViceCaptain = styled.button`
  border: 2px solid #cccccc;
  border-radius: 50%;
  background-color: #ffffff;
  color: #cccccc;
  font-weight: 700;
  font-size: 16px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Name = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  img {
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }
  h1 {
    white-space: nowrap;
  }
`;

const NextButtonContainer = styled.div`
  position: fixed;
  bottom: 8%;
  left: 0%;
  z-index: 1000000000000000000000000;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const NextButton = styled.button`
  background-color: #008a36;
  color: #ffffff;
  border: none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px 20px;
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 1000000000000000000000000;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
`;

const PrevButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px 10px;
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 1000000000000000000000000;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  display: flex;
  align-items: center;
  width: 230px;
  justify-content: space-evenly;
  white-space: nowrap;
`;

const Top = styled.div`
  background-image: url("localhost:3000/pitch.png");
  width: 100% !important;
  height: 200px !important;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-repeat: repeat !important;
  background-color: #008a36;
  background-size: 100% !important;
  color: #ffffff;
  text-transform: uppercase;
  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      margin: 0;
      padding: 0;
    }
  }
  img {
    width: 40px !important;
    height: 40px !important;
  }
`;

const PlayerP = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  img {
    width: 70px !important;
    height: 70px !important;
    border-radius: 50%;
    display: block !important;
  }
  p {
    margin: 0 !important;
    padding: 0 10px !important;
  }
`;

const Title = styled.p`
  position: absolute;
  bottom: 0px;
  background-color: #000000;
  color: #ffffff;
  padding: 2px 5px;
  border-radius: 2px;
  max-width: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bottom = styled(Grid)`
  background-color: #ffffff;
  padding: 10px 10px;
`;

const Each = styled(Grid)`
  font-size: 14px;
  color: #777777;
  span {
    font-size: 16px !important;
    font-weight: 600 !important;
    color: #000000;
  }
`;

const EachTeam = styled.div`
  box-shadow: 5px 5px 4px 2px #cecccc;
  border-radius: 5px;
  overflow: hidden;
`;
const Captain = styled.div`
  font-size: 12px;
  text-transform: capitalize;
  background-color: #ffffff;
  color: #000000;
  border-radius: 5px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VCaptain = styled.div`
  font-size: 12px;
  text-transform: capitalize;
  background-color: #000000;
  color: #ffffff;
  border-radius: 5px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CaptainsContainer = styled.div`
  position: relative;
`;

const CaptainI = styled.div`
  position: absolute;
  border: 3px solid #000000;
  padding: 2px 2px;
  left: -25%;
  top: -25%;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15px;
  width: 15px;
  background-color: #ffffff;
  color: #000000;
`;

const VcaptainI = styled.div`
  position: absolute;
  border: 3px solid #ffffff;
  padding: 2px 2px;
  left: -20%;
  top: -20%;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15px;
  width: 15px;
  background-color: #000000;
`;
export const TeamShort = ({ players, id, plo }) => {
  const [upcoming, setUpcoming] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [live, setLive] = useState([]);
  const [past, setPast] = useState([]);
  const [save, setSave] = useState(false);
  const [captains, setCaptains] = useState([]);
  const [matchinfo, setMatchinfo] = useState([]);
  useEffect(() => {
    async function filterDifferent() {
      const data = await axios.get(`${URL}/getplayers/${id}`);

      let h = data.data.players.teamHomePlayers.filter((f) => {
        return selectedPlayers.some((s) => {
          return f.playerId === s.playerId;
        });
      }).length;
      let o = data.data.players.teamAwayPlayers.filter((f) => {
        return selectedPlayers.some((s) => {
          return f.playerId === s.playerId;
        });
      }).length;
      let a = [
        { awayCode: data.data.matchdetails.teamAwayCode, number: o },
        { homeCode: data.data.matchdetails.teamHomeCode, number: h },
      ];
      setMatchinfo([...a]);
    }
    filterDifferent();
  }, [id, selectedPlayers, plo]);

  useEffect(() => {
    async function filterDifferent() {
      const data = await axios.get(`${URL}/getplayers/${id}`);
      let cap = data.data.players.teamAwayPlayers
        .concat(data.data.players.teamHomePlayers)
        .filter((f) => {
          return f.playerId == plo.captainId;
        });
      let vcap = data.data.players.teamAwayPlayers
        .concat(data.data.players.teamHomePlayers)
        .filter((f) => {
          return f.playerId == plo.viceCaptainId;
        });

      setCaptains([...cap, ...vcap]);
    }
    filterDifferent();
  }, [plo]);

  useEffect(() => {
    let pl = players.map((obj) => ({
      ...obj,
    }));
    setSelectedPlayers([...pl]);
  }, [id]);

  const handleCaptain = (i) => {
    let op = players.map((p) => {
      p.isCaptain = false;
      return p;
    });
    let po = op.map((p) => {
      if (p._id === i) {
        p.isCaptain = true;
      }
      return p;
    });
    setSelectedPlayers([...po]);
  };

  const handleViceCaptain = (i) => {
    let op = players.map((p) => {
      p.isViceCaptain = false;
      return p;
    });
    let po = op.map((p) => {
      if (p._id === i) {
        p.isViceCaptain = true;
      }
      return p;
    });
    setSelectedPlayers([...po]);
  };
  const handleSave = async () => {
    setSave(true);
  };

  const isCandVcselected = () => {
    let a = selectedPlayers.find((s) => s.isCaptain);
    let b = selectedPlayers.find((s) => s.isViceCaptain);
    return a && b;
  };
  console.log(matchinfo, captains, "cap");
  return (
    <div>
      {players ? (
        <EachTeam>
          {matchinfo.length > 0 && captains.length > 0 && (
            <Top>
              <div>
                <h3>{matchinfo[0].awayCode}</h3>
                <p>{matchinfo[0].number}</p>
              </div>
              <div>
                <h3>{matchinfo[1].homeCode}</h3>
                <p>{matchinfo[1].number}</p>
              </div>
              <CaptainsContainer>
                <CaptainI>
                  <span>c</span>
                </CaptainI>
                <img src={captains[0].image} alt="" />

                <Captain>
                  <p>
                    {captains[0].playerName.split(" ")[0].charAt(0) +
                      " " +
                      captains[0].playerName.split(" ")[1]}
                  </p>
                </Captain>
              </CaptainsContainer>
              <CaptainsContainer>
                <VcaptainI>vc</VcaptainI>
                <img src={captains[1].image} alt="" />
                <VCaptain>
                  <p>
                    {captains[1].playerName.split(" ")[0].charAt(0) +
                      " " +
                      captains[1].playerName.split(" ")[1]}
                  </p>
                </VCaptain>
              </CaptainsContainer>
            </Top>
          )}
          <Bottom container spacing={1}>
            <Each item xs={3} sm={3}>
              WK
              <span>
                {
                  selectedPlayers.filter((f) => f.position === "wicketkeeper")
                    .length
                }
              </span>
            </Each>
            <Each item xs={3} sm={3}>
              BAT{" "}
              <span>
                {selectedPlayers.filter((f) => f.position === "batsman").length}{" "}
              </span>
            </Each>
            <Each item xs={3} sm={3}>
              AR{" "}
              <span>
                {
                  selectedPlayers.filter((f) => f.position === "allrounder")
                    .length
                }{" "}
              </span>
            </Each>
            <Each item xs={3} sm={3}>
              BOWL{" "}
              <span>
                {selectedPlayers.filter((f) => f.position === "bowler").length}
              </span>
            </Each>
          </Bottom>
        </EachTeam>
      ) : (
        <h1>ok</h1>
      )}
    </div>
  );
};

export default TeamShort;
