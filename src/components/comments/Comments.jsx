import styled from "styled-components";
import pp from "../../assets/pp.jpeg";

const Comments = () => {
  return (
    <CommentsWrapper>
      <div className="comment">
        <img src={pp} alt="" />
        <div className="details">
          <div className="username">jane doe</div>
          <div className="comment-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            sapiente exercitationem velit necessitatibus inventore beatae.
            Vitae, perspiciatis reiciendis! Velit, soluta at non voluptatum
            expedita nisi porro, molestiae ea, ipsam sapiente vitae maiores
            deserunt distinctio omnis debitis? Sint repudiandae nobis ex
            repellendus ipsa enim tempora voluptas magnam veniam? Minima
            excepturi totam repellat ad libero reiciendis, iste deleniti quae
            aut ut quis consequatur deserunt delectus animi praesentium tempora.
            Minus, quaerat. Quaerat?
          </div>
          <small>4 Months Ago</small>
        </div>
      </div>
      <div className="comment">
        <img src={pp} alt="" />
        <div className="details">
          <div className="username">jane doe</div>
          <div className="comment-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            cumque.
          </div>
          <small>1s ago</small>
        </div>
      </div>

      <div className="comment">
        <img src={pp} alt="" />
        <div className="details">
          <div className="username">jane doe</div>
          <div className="comment-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            consequuntur, repellendus id eaque neque sunt sed. Qui, quis
            cupiditate! Quos sunt voluptas animi ratione explicabo!
          </div>
          <small>12 hours ago</small>
        </div>
      </div>
    </CommentsWrapper>
  );
};
export default Comments;

const CommentsWrapper = styled.div`
  display: flex;
  color: ${(p) => p.theme.text};
  flex-direction: column;
  gap: 20px;
  margin: 5px 0;
  .comment {
    display: flex;
    color: ${(p) => p.theme.text};
    gap: 15px;
    img {
      height: 30px;
      flex: initial;
      width: 30px;
      background-color: black;
      border-radius: 50%;
      object-fit: cover;
    }
    .details {
      flex: 10;
      display: flex;
      flex-direction: column;
      gap: 3px;
      .username {
        font-weight: bold;
        font-size: 17px;
      }
      .comment-body {
        font-size: 13px;
        /* font-weight: 100; */
      }
      small {
        font-size: 8px;
        /* align-self: center; */
        /* margin-left: auto; */
        color: ${(p) => p.theme.textSoft};
        /* text-align: center; */
      }
    }
  }
`;
