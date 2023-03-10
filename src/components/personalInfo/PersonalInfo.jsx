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
          <BsInstagram className="icon inst" />
          <BsFacebook className="icon fb" />
          <BsTwitter className="icon twitter" />
          <BsLinkedin className="icon li" />
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
  transition: 0.4s ease;
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
    border-radius: 20px;
    padding: 60px 0 20px 0;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    box-shadow: 0 0 10px 2px ${(p) => p.theme.shadow};
    .username {
      h2 {
        font-size: 1.1rem;
        font-weight: bold;
        display: inline;
      }
    }
    .location-container {
      font-size: 12px;
      font-weight: 400;
      margin-right: 1rem;
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
        margin: 0 8px;
        font-size: 30px;
        transition: 0.15s ease;
        &:hover {
          transform: scale(1.15);
        }
      }
      .icon.inst {
        color: #ff491c;
      }
      .icon.fb {
        color: #4267b2;
      }
      .icon.twitter {
        color: #ffd375;
      }
      .icon.li {
        color: #0ca9f2;
      }
    }
    .buttons-container {
      button {
        margin: 0 10px;
        border: none;
        font-weight: bold;
        padding: 8px 15px;
        border-radius: 5px;
        color: black;
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
