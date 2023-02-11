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
  overflow: auto;
  width: 100%;
  border-radius: 15px;
  ::-webkit-scrollbar {
    background: transparent;
    height: 5px;
    border-radius: 5px;
    display: initial;
    @media ${(p) => p.theme.media.ipad} {
      display: none;
    }
  }
  ::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 5px;
  }
  .story {
    height: 180px;
    min-width: 110px;
    object-fit: cover;
    color: white;
    border-radius: 12px;
    background-color: black;
    margin: 5px 0;
    @media ${(p) => p.theme.media.mobile} {
      height: 75px;
      min-width: 75px;
      border-radius: 50%;
    }
    @media ${(p) => p.theme.media.ipad} {
      height: 140px;
      min-width: 110px;
    }
  }
`;
