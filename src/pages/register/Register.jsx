import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "./omar-lopez-rwF_pJRWhAI-unsplash.jpg";

const Register = () => {
  return (
    <RegisterPage>
      <div className="card">
        <div className="left">
          <h2>Register</h2>
          <form action="">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="e-mail" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="display name" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h2>myFace Social.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            ratione vel neque esse earum reprehenderit error dolor eveniet
            placeat quia.
          </p>
          <div className="login">
            <span>already have an account ?</span>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </RegisterPage>
  );
};

export default Register;

const RegisterPage = styled.div`
  height: 100vh;
  background-color: rgba(255, 221, 208, 0.763);
  justify-content: center;
  align-items: center;
  display: flex;
  .card {
    display: flex;
    width: 50%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 3px 1px white;
    background-color: white;
    height: 70%;
    .left {
      height: 100%;
      flex: 1;
      color: black;
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 35px;
      justify-content: center;
      h2 {
        font-size: 3rem;
      }
      form {
        display: flex;
        flex-direction: column;
        /* padding: 10px; */
        gap: 20px;
        input {
          border: none;
          border-bottom: 1px lightgray solid;
          padding: 10px;
          border-radius: 5px;
          :focus {
            outline: none;
          }
        }
        button {
          margin-top: 20px;
          width: 70%;
          padding: 10px 0px;
          font-weight: bolder;
          letter-spacing: 0.8px;
          background-color: tomato;
          border: none;
          color: white;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 0 5px tomato;
        }
      }
    }
    .right {
      background: linear-gradient(rgba(100, 50, 30, 0.5), #0000007a),
        url(${image}) center no-repeat;

      background-size: cover;
      color: white;
      height: 100%;
      flex: 1;
      padding: 30px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
      h2 {
        /* line-height: 1; */
        font-size: 4rem;
        letter-spacing: 3px;
      }
      p {
        font-size: 15px;
      }
      .login {
        display: flex;
        flex-direction: column;
        gap: 12px;
        color: #ffffffae;
        span {
          font-size: 0.8rem;
          padding-left: 10px;
          text-decoration: underline;
        }

        button {
          padding: 10px 0px;
          width: 70%;
          font-weight: 900;
          border: none;
          color: #ff2600b4;
          cursor: pointer;
          border-radius: 10px;
          box-shadow: 0 0 5px white;
        }
      }
    }
  }
`;
