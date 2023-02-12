import styled from "styled-components";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";

const Home = () => {
  return (
    <HomeWrapper>
      <Stories />
      <Posts />
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
  gap: 5px;
  transition: 0.4s ease;
  padding: 15px 20px;
  background-color: ${(p) => p.theme.backgroundSoft};
  overflow: hidden;
  @media ${(p) => p.theme.media.ipad} {
    padding: 15px 10px;
  }
`;
