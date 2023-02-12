import styled from "styled-components";

const Stories = () => {
  return (
    <StoriesWrapper>
      <div className="story">
        <img src="" alt="" />
        <span>here</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>here</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>here</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>here</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>here</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>here</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>here</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>here</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>here</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>here</span>
      </div>
      <div className="story">
        <img src="" alt="" />
        <span>here</span>
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
  margin-bottom: 5px;
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
    background-color: black;
    border-radius: 12px;
    margin: 5px 2px;
    @media ${(p) => p.theme.media.ipad} {
      height: 140px;
      min-width: 110px;
    }
    @media ${(p) => p.theme.media.mobile} {
      height: 90px;
      min-width: 90px;
      border-radius: 50%;
    }
  }
`;
