import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <div className="stories">
        <div className="story">story1</div>
        <div className="story">story2</div>
        <div className="story">story3</div>
        <div className="story">story4</div>
        <div className="story">story5</div>
      </div>
      <div className="feed">
        <div className="user">
          <img src="" alt="" />
          <div className="details">
            <span>John Doe</span>
            <small>3s ago</small>
          </div>
          <button>...</button>
        </div>
        <p>i enjoyed the trip with the guyz</p>
        <img src="" alt="" />
      </div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.main`
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px 30px;
  background-color: ${(p) => p.theme.backgroundSoft};

  .stories {
    display: flex;
    gap: 5px;
    .story {
      height: 180px;
      color: white;

      width: 110px;
      border-radius: 12px;
      background-color: black;
    }
  }

  .feed {
    background-color: ${(p) => p.theme.backgroundColor};
    color: ${(p) => p.theme.text};
    border-radius: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    .user {
      gap: 10px;
      display: flex;
      align-items: center;
      img {
        height: 25px;
        width: 25px;
        background-color: black;
        border-radius: 50%;
      }
      .details {
        display: flex;
        flex-direction: column;
        span {
        }
        small {
          /* padding-left: 4px; */
          color: darkgray;
          font-size: 10px;
          /* align-self: center; */
        }
      }
    }
    button {
      margin-left: auto;
      border: none;
    }
    p {
    }
    img {
      width: 100%;
      background-color: black;
      height: 500px;
    }
  }
`;
