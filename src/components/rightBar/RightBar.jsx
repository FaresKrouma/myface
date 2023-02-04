import styled from "styled-components";

const RightBar = () => {
  return (
    <RightBarWrapper>
      <div className="section">
        <span className="title">suggestions for you</span>
        <div className="requests">
          <div className="item">
            <img src="" alt="" />
            <span>john doe</span>
            <button className="follow">follow</button>
            <button className="dismiss">dismiss</button>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>john doe</span>
            <button className="follow">follow</button>
            <button className="dismiss">dismiss</button>
          </div>
        </div>
      </div>
      <div className="section">
        <span className="title">latest activities</span>
        <div className="activities">
          <div className="item">
            <img src="" alt="" />
            <span>john doe</span>
            <span>changed profile pic</span>
            <span>5 sec ago</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>john doe</span>
            <span>changed profile pic</span>
            <span>5 sec ago</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>john doe</span>
            <span>changed profile pic</span>
            <span>5 sec ago</span>
          </div>

          <div className="item">
            <img src="" alt="" />
            <span>john doe</span>
            <span>changed profile pic</span>
            <span>5 sec ago</span>
          </div>
        </div>
      </div>
      <div className="section">
        <span className="title">online friends</span>
        <div className="online">
          <div className="item">
            <img src="" alt="" />
            <span>john smith</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>john smith</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>john smith</span>
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
  gap: 15px;
  .section {
    margin: 15px 15px 0 0;
    padding: 10px 15px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    gap: 5px;
    .title {
      color: #838383;
    }
  }
`;
