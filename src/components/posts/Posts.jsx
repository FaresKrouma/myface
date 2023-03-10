import styled from "styled-components";
import Post from "../post/Post";

const Posts = () => {
  return (
    <PostsWrapper>
      <Post />
      <Post />
      <Post />
    </PostsWrapper>
  );
};

export default Posts;

const PostsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media ${(p) => p.theme.media.ipad} {
    gap: 1rem;
  }
`;
