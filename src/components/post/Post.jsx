import styled from "styled-components";
import pp from "../../assets/pp.jpeg";
import { BsChatLeftText } from "react-icons/bs";
import { RiShareLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { RiHeart3Line } from "react-icons/ri";

const Post = () => {
  return (
    <PostWrapper>
      <div className="user">
        <img src={pp} alt="" />
        <div className="details">
          <span>John Doe</span>
          <small>3s ago</small>
        </div>
        <button>...</button>
      </div>
      <div className="content">
        <p>i enjoyed the trip with the guyz</p>
        <img src={pp} alt="" />
      </div>
      <div className="interactions">
        <span>
          {/* <RiHeart3Line className="icon" /> */}
          <FcLike className="icon" />
          Like
        </span>
        <span>
          <BsChatLeftText className="icon" />
          Comment
        </span>
        <span>
          <RiShareLine className="icon" />
          Share
        </span>
      </div>
    </PostWrapper>
  );
};

export default Post;

const PostWrapper = styled.div`
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
      height: 40px;
      width: 40px;
      /* background-color: black; */
      object-fit: cover;
      border-radius: 50%;
    }
    .details {
      display: flex;
      flex-direction: column;
      span {
      }
      small {
        /* padding-left: 4px; */
        color: ${(p) => p.theme.textSoft};
        font-size: 10px;
        /* align-self: center; */
      }
    }
    button {
      margin-left: auto;
      border: none;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      padding: 0 5px;
    }
    img {
      width: 100%;
      background-color: black;
      height: 500px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .interactions {
    display: flex;
    gap: 30px;
    padding: 0 10px;
    span {
      display: flex;
      align-items: center;
      gap: 5px;
      .icon {
        font-size: 20px;
      }
    }
  }
`;
