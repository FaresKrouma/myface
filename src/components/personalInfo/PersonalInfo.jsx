import styled from "styled-components";
import pp from "../../assets/fares.jpg";
import cover from "../../assets/test.jpg";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const PersonalInfo = () => {
  return (
    <PersonalInfoWrapper>
      <div className="images">
        <img className="headerpic" src={cover} alt="" />
        <img className="profilepic" src={pp} alt="" />
      </div>
      <div className="info-container">
        <div className="username">
          <h2>Fares Krouma</h2>
        </div>
        <div className="location-container">
          <span>
            <FiMapPin className="icon" />
            Berlin
          </span>
          <span>Dota2</span>
        </div>
        <div className="links-container">
          <BsInstagram className="icon" />
          <BsFacebook className="icon" />
          <BsTwitter className="icon" />
          <BsLinkedin className="icon" />
        </div>
        <div className="buttons-container">
          <button>Follow</button>
          <button>Message</button>
        </div>
      </div>
    </PersonalInfoWrapper>
  );
};

export default PersonalInfo;

const PersonalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  color: ${(p) => p.theme.text};
  align-items: center;
  /* justify-content: center; */
  .images {
    position: relative;
    width: 100%;
    .headerpic {
      width: 100%;
      background-color: black;
      height: 300px;
      border-radius: 10px;
    }
    .profilepic {
      width: 150px;
      height: 150px;
      left: 0;
      margin: auto;
      right: 0;
      top: 225px;
      border-radius: 50%;
      object-fit: cover;
      position: absolute;
      box-shadow: 0 0 10px ${(p) => p.theme.shadow};
    }
  }
  .info-container {
    border: 1px solid ${(p) => p.theme.border};
    background-color: ${(p) => p.theme.backgroundColor};
    text-align: center;
    width: 90%;
    margin-top: 75px;
    border-radius: 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    box-shadow: 0 0 10px 2px ${(p) => p.theme.shadow};
    .username {
      h2 {
        display: inline;
      }
    }
    .location-container {
      span {
        margin: 0 5px;
        .icon {
          margin: 0 5px;
        }
      }
    }
    .links-container {
      margin: 10px 0;
      .icon {
        margin: 0 5px;
        font-size: 20px;
      }
    }
    .buttons-container {
      button {
        margin: 0 10px;
        border: none;
        font-weight: bold;
        padding: 5px 15px;
        border-radius: 5px;
        :first-child {
          background-color: #29cac5;
        }
        :nth-last-child(1) {
          background-color: #a267dd;
        }
      }
    }
  }
`;
