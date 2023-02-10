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
        </div>
        <small>12 hrs ago</small>
      </div>
      <div className="comment">
        <img src={pp} alt="" />
        <div className="details">
          <div className="username">jane doe</div>
          <div className="comment-body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ad
            sint neque odit corrupti? Quisquam adipisci perferendis
            necessitatibus ad facilis ipsum! Enim iure dolorum sunt modi
            nesciunt accusamus earum, quam facilis illo nihil inventore eius
            adipisci autem animi odit sapiente fuga quis, consequatur eveniet
            aliquid, itaque qui at quasi quidem? Quo quisquam, nesciunt quos
            eaque nihil, similique voluptatem nulla totam nostrum excepturi
            impedit fuga. Est, reiciendis voluptatem veniam maiores iusto
            ducimus quaerat hic alias, blanditiis perspiciatis modi soluta eos.
            Iste odit maxime ipsa quos asperiores deserunt optio minima quasi
            placeat tenetur, nihil maiores hic ea blanditiis necessitatibus
            quaerat veritatis odio!
          </div>
        </div>
        <small>1s ago</small>
      </div>

      <div className="comment">
        <img src={pp} alt="" />
        <div className="details">
          <div className="username">jane doe</div>
          <div className="comment-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            suscipit quas obcaecati quibusdam fugiat. Ipsum veniam ut voluptates
            natus modi incidunt qui iusto aut aperiam laboriosam dignissimos
            expedita voluptatibus, provident animi quasi commodi nobis
            veritatis, atque adipisci dolor autem non.
          </div>
        </div>
        <small>12 hours ago</small>
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
    gap: 15px;
    img {
      height: 30px;
      /* flex: 1; */
      width: 30px;
      background-color: black;
      border-radius: 50%;
      object-fit: cover;
    }
    .details {
      /* flex: 15; */

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
    }
    small {
      font-size: 10px;
      align-self: center;
      justify-self: flex-end;
      margin-right: auto;
      line-height: 1;
      color: ${(p) => p.theme.textSoft};
      text-align: center;
    }
  }
`;
