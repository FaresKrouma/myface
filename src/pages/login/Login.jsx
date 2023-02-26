import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/authContext";
import image from "./kelsey-chance-CutTQTt2HyI-unsplash.jpg";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loginCredintals, setLoginCredintals] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginCredintals((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginCredintals);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginPage>
      <div className="card">
        <div className="left">
          <h2>Hello World!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            ratione vel neque esse earum reprehenderit error dolor eveniet
            placeat quia.
          </p>
          <div className="register">
            <span>dont have an account ?</span>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="email"
              name="email"
              autoComplete="off"
            />
            <input
              onChange={handleChange}
              type="password"
              placeholder="password"
              name="password"
              autoComplete="off"
            />
            <small className="error">err</small>
            <Link to="/">
              <button onClick={handleLogin}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </LoginPage>
  );
};

export default Login;

const LoginPage = styled.div`
  height: 100vh;
  background-color: rgba(255, 221, 208, 0.763);
  justify-content: center;
  align-items: center;
  display: flex;
  .card {
    box-shadow: 0 0 3px 1px white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-radius: 10px;
    background-color: white;
    height: 70%;
    overflow: hidden;
    .left {
      background: linear-gradient(rgba(100, 50, 30, 0.5), #0000007a),
        url(${image}) no-repeat;
      height: 100%;
      background-size: cover;
      flex: 1;
      color: white;
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 35px;
      justify-content: center;
      h2 {
        font-size: 4rem;
      }
      p {
        font-size: 15px;
      }
      .register {
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
    .right {
      height: 100%;
      flex: 1;
      padding: 30px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
      h2 {
        font-size: 3rem;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        input {
          border-radius: 5px;
          border: none;
          border-bottom: 1px lightgray solid;
          padding: 10px;
          :focus {
            outline: none;
          }
        }
        .error {
          font-size: 10px;
        }
        button {
          padding: 10px 0px;
          font-weight: bolder;
          letter-spacing: 0.8px;
          box-shadow: 0 0 5px tomato;
          background-color: tomato;
          border: none;
          color: white;
          border-radius: 10px;
          cursor: pointer;
          width: 70%;
        }
      }
    }
  }
`;
