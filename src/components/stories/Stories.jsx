import styled from "styled-components";

const Stories = () => {
  return (
    <StoriesWrapper>
      <div className="story">
        <img src="" alt="" />
        <span>story1</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>story1</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>story1</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>story1</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>story1</span>
      </div>
    </StoriesWrapper>
  );
};

export default Stories;

const StoriesWrapper = styled.div`
  display: flex;
  gap: 5px;
  .story {
    height: 180px;
    flex: 1;
    color: white;
    width: 110px;
    border-radius: 12px;
    background-color: black;
  }
`;
