import styled from "styled-components";
import friends from "../../assets/1.png";
import groups from "../../assets/2.png";
import marketplace from "../../assets/3.png";
import watch from "../../assets/4.png";
import memories from "../../assets/5.png";
import events from "../../assets/6.png";
import games from "../../assets/7.png";
import gallery from "../../assets/8.png";
import videos from "../../assets/9.png";
import messages from "../../assets/10.png";
import fundraiser from "../../assets/11.png";
import tutorials from "../../assets/12.png";
import courses from "../../assets/13.png";

const LeftBar = () => {
  return (
    <LeftBarWrapper>
      <div className="section">
        <div className="user item">
          <img src="" alt="" /> <span> john doe</span>
        </div>
        <div className="item">
          <img src={friends} alt="" /> <span> Friends</span>
        </div>
        <div className="item">
          <img src={groups} alt="" /> <span> Groups</span>
        </div>
        <div className="item">
          <img src={marketplace} alt="" /> <span> Marketplace</span>
        </div>
        <div className="item">
          <img src={watch} alt="" /> <span> Watch</span>
        </div>
        <div className="item">
          <img src={memories} alt="" /> <span> Memories</span>
        </div>
      </div>
      <hr />
      <div className="section">
        <div className="title">Your Shortcuts</div>
        <div className="item">
          <img src={events} alt="" />
          <span>Events</span>
        </div>
        <div className="item">
          <img src={games} alt="" />
          <span>Games</span>
        </div>
        <div className="item">
          <img src={gallery} alt="" />
          <span>Gallery</span>
        </div>
        <div className="item">
          <img src={videos} alt="" />
          <span>Videos</span>
        </div>
        <div className="item">
          <img src={messages} alt="" />
          <span>Messages</span>
        </div>
      </div>
      <hr />
      <div className="section">
        <div className="title">Others</div>
        <div className="item">
          <img src={fundraiser} alt="" />
          <span>Fundraiser</span>
        </div>
        <div className="item">
          <img src={tutorials} alt="" />
          <span>Tutorials</span>
        </div>
        <div className="item">
          <img src={courses} alt="" />
          <span>Courses</span>
        </div>
        <div className="item">
          <img src={courses} alt="" />
          <span>Courses</span>
        </div>
        <div className="item">
          <img src={courses} alt="" />
          <span>Courses</span>
        </div>
        <div className="item">
          <img src={courses} alt="" />
          <span>Courses</span>
        </div>
        <div className="item">
          <img src={courses} alt="" />
          <span>Courses</span>
        </div>
        <div className="item">
          <img src={courses} alt="" />
          <span>Courses</span>
        </div>
      </div>
    </LeftBarWrapper>
  );
};
export default LeftBar;

const LeftBarWrapper = styled.aside`
  flex: 1.5;
  position: sticky;
  left: 0;
  top: 50px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 20px;
  border-right: 1px solid lightgrey;
  height: calc(100vh - 50px);
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .section {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  hr {
    border: none;
    height: 0.5px;
    background-color: lightgrey;
  }
  .item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
    img {
      width: 22px;
      height: 22px;
    }
    span {
      font-size: 13px;
    }
  }
  .user {
    img {
      border-radius: 50%;
      background-color: black;
      height: 30px;
      width: 30px;
    }
    span {
      font-weight: bolder;
      font-size: 15px;
    }
  }
  .title {
    color: #838383;
    font-size: 14px;
  }
`;
