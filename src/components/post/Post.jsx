import styled from "styled-components";
import pp from "../../assets/pp.jpeg";
import { BsChatLeftText, BsThreeDots } from "react-icons/bs";
import { RiShareLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { RiHeart3Line } from "react-icons/ri";
import { useState } from "react";
import Comments from "../comments/Comments";

const Post = () => {
  const [showComments, setShowComments] = useState(() => false);
  const liked = false;
  return (
    <PostWrapper>
      <div className="user">
        <img src={pp} alt="" />
        <div className="details">
          <span>John Doe</span>
          <small>3s ago.</small>
        </div>
        <BsThreeDots className="icon" />
      </div>
      <div className="content">
        <p>i enjoyed the trip with the guyz</p>
        <img src={pp} alt="" />
      </div>
      <div className="interactions">
        <span>
          {liked ? (
            <FcLike className="icon" />
          ) : (
            <RiHeart3Line className="icon" />
          )}
          10 Like
        </span>
        <span
          onClick={() => {
            setShowComments((prev) => !prev);
          }}
        >
          <BsChatLeftText className="icon" />
          12 Comments
        </span>
        <span>
          <RiShareLine className="icon" />
          Share
        </span>
      </div>
      <div className="write-comment">
        <img src="" alt="" />
        <input placeholder="Write a comment here..." type="text" />
        <button>Post</button>
      </div>

      {showComments && <Comments />}
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
  transition: 0.4s ease;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  box-shadow: 0 0 10px 2px ${(p) => p.theme.shadow};
  .user {
    gap: 10px;
    padding: 0 10px;
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
        font-weight: bold;
        font-size: 14px;
      }
      small {
        color: ${(p) => p.theme.textSoft};
        font-size: 8px;
      }
    }
    .icon {
      margin-left: auto;
      font-size: 25px;
      cursor: pointer;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      padding: 0 10px;
      font-size: 12px;
    }
    img {
      width: 100%;
      background-color: #f2f2f2;
      height: 500px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .interactions {
    display: flex;
    gap: 30px;
    padding: 0 5px;
    span {
      display: flex;
      cursor: pointer;
      align-items: center;
      gap: 5px;
      font-size: 11px;
      @media ${(p) => p.theme.media.mobile} {
        font-size: 10px;
      }
      .icon {
        font-size: 20px;
      }
    }
  }
  .write-comment {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    img {
      height: 30px;
      width: 30px;
      background-color: black;
      object-fit: cover;
      border-radius: 50%;
      flex: initial;
    }
    input {
      padding: 6px 8px;
      flex: 5;
      border: 1px solid ${(p) => p.theme.border};
      border-radius: 5px;
      :focus {
        outline: none;
      }
    }
    button {
      font-size: 10px;
      cursor: pointer;
      font-weight: bold;
      border: none;
      padding: 6px 8px;
      border-radius: 5px;
      background-color: #29cac5;
      color: black;
    }
  }
`;
