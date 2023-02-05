import styled from "styled-components";

const RightBar = () => {
  return (
    <RightBarWrapper>
      <div className="section">
        <h4>suggestions for you</h4>
        <div className="item">
          <div className="user">
            <img src="" alt="" />
            <span>john doe</span>
          </div>
          <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
          </div>
        </div>
        <div className="item">
          <div className="user">
            <img src="" alt="" />
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
            <img src="" alt="" />
            <p>
              <span> john doe </span>changed their profile pic.
            </p>
          </div>
          <small>1s ago</small>
        </div>
        <div className="item">
          <div className="user">
            <img src="" alt="" />
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
          <div className="user">
            <div className="online-status">.</div>
            <img src="" alt="" />
            <span>john doe</span>
          </div>
        </div>
        <div className="item">
          <div className="user">
            <div className="online-status">.</div>
            <img src="" alt="" />
            <span>john doe</span>
          </div>
        </div>
        <div className="item">
          <div className="user">
            <div className="online-status">.</div>
            <img src="" alt="" />
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
  padding: 1rem;
  flex: 2.25;
  position: sticky;
  right: 0;
  top: 50px;
  height: calc(100vh - 50px);
  .section {
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    padding: 15px;
    flex-direction: column;
    gap: 10px;
    border-radius: 5px;
    h4 {
      color: darkgrey;
      font-size: 14px;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .user {
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        img {
          height: 25px;
          width: 25px;
          margin-right: 5px;
          background-color: black;
          border-radius: 50%;
        }
        p {
          font-size: 10px;
          color: #9c9c9c;
          span {
          }
        }
        span {
          font-weight: 600;
          letter-spacing: -0.4px;
          color: black;
          font-size: 14px;
        }
        .online-status {
        }
      }
      small {
        color: #c2c2c2;
        font-size: 10px;
      }

      .buttons {
        display: flex;
        gap: 5px;
        button {
          font-size: 10px;
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
