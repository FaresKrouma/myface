import styled from "styled-components";
import pp from "../../assets/pp.jpeg";

const RightBar = () => {
  return (
    <RightBarWrapper>
      <div className="section">
        <h4>suggestions for you</h4>
        <div className="item">
          <div className="user">
            <img src={pp} alt="" />
            <span>john doe</span>
          </div>
          <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
          </div>
        </div>
        <div className="item">
          <div className="user">
            <img src={pp} alt="" />
            <span>john doe</span>
          </div>
          <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
          </div>
        </div>
      </div>
      <div className="section">
        <h4>latest activities</h4>
        <div className="item">
          <div className="user">
            <img src={pp} alt="" />
            <p>
              <span> john doe </span>changed their profile pic.
            </p>
          </div>
          <small>1s ago</small>
        </div>
        <div className="item">
          <div className="user">
            <img src={pp} alt="" />
            <p>
              <span> john doe </span>changed their profile pic.
            </p>
          </div>
          <small>1s ago</small>
        </div>
      </div>
      <div className="section">
        <h4>online friends</h4>
        <div className="item">
          <div className="user online">
            <img src={pp} alt="" />
            <span>john doe</span>
          </div>
        </div>
        <div className="item ">
          <div className="user online">
            <img src={pp} alt="" />
            <span>john doe</span>
          </div>
        </div>
        <div className="item ">
          <div className="user online">
            <img src={pp} alt="" />
            <span>john doe</span>
          </div>
        </div>
      </div>
    </RightBarWrapper>
  );
};

export default RightBar;

const RightBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem 0 0;
  flex: 2.25;
  position: sticky;
  right: 0;
  top: 50px;
  height: calc(100vh - 50px);
  background-color: ${(p) => p.theme.backgroundSoft};
  /* color: ${(p) => p.theme.text}; */

  .section {
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.07);
    display: flex;
    padding: 15px;
    flex-direction: column;
    gap: 10px;
    background-color: ${(p) => p.theme.backgroundColor};
    border-radius: 5px;
    h4 {
      color: ${(p) => p.theme.textSoft};
      font-size: 14px;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      .user {
        display: flex;
        align-items: center;
        position: relative;
        img {
          height: 25px;
          width: 25px;
          margin-right: 5px;
          background-color: black;
          border-radius: 50%;
          object-fit: cover;
        }
        p {
          font-size: 10px;
          color: ${(p) => p.theme.textSoft};
          span {
          }
        }
        span {
          font-weight: 600;
          letter-spacing: -0.4px;
          color: ${(p) => p.theme.text};
          font-size: 12px;
        }
      }
      .online {
        img {
          ::before {
            content: "";
            height: 9px;
            width: 9px;
            position: absolute;
            top: -3px;
            left: 18px;
            background-color: green;
            border-radius: 50%;
          }
        }
      }

      small {
        color: #c2c2c2;
        font-size: 8px;
      }

      .buttons {
        display: flex;
        gap: 7px;
        button {
          font-size: 14px;
          border: none;
          padding: 5px;
          border-radius: 5px;

          :first-child {
            background-color: #29cac5;
          }
          :nth-child(2) {
            background-color: tomato;
          }
        }
      }
    }
  }
`;
