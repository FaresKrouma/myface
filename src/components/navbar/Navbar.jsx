import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

import styled from "styled-components";
import { TbMoon } from "react-icons/tb";
import { FiMail, FiGrid, FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdNotificationsNone } from "react-icons/md";
import { RiSunFill } from "react-icons/ri";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <NavbarWrapper>
      <div className="left">
        <h3>myface social</h3>
        <FiHome className="icon" />
        {darkMode ? (
          <RiSunFill onClick={toggleDarkMode} className="icon" />
        ) : (
          <TbMoon onClick={toggleDarkMode} className="icon" />
        )}
        <FiGrid className="icon" />
        <form>
          <input type="text" placeholder="search here..." />
        </form>
      </div>
      <div className="right">
        <CgProfile className="icon" />
        <FiMail className="icon" />
        <MdNotificationsNone className="icon" />
        <div className="profile-thumb">
          <img src={currentUser.img.pp} alt="profile pic" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </NavbarWrapper>
  );
};
export default Navbar;

const NavbarWrapper = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${(p) => p.theme.backgroundColor};
  color: ${(p) => p.theme.text};
  justify-content: space-between;
  border-bottom: 1px solid ${(p) => p.theme.border};
  padding: 10px 20px;
  overflow: hidden;
  z-index: 5;
  .left {
    display: flex;
    align-items: center;
    gap: 14px;
    h3 {
      margin: 0 1rem 0 0;
      color: palevioletred;
    }
    form {
      padding: 0;
      margin: 0 1rem;
      input {
        padding: 7px 10px;
        margin: 0 auto;
        background-color: transparent;
        color: ${(p) => p.theme.text};
        font-size: 15px;
        border-radius: 5px;
        border: 1px ${(p) => p.theme.border} solid;
        width: 400px;
        letter-spacing: 0.8px;
        ::placeholder {
          color: ${(p) => p.theme.textSoft};
        }
      }
    }
  }
  .right {
    gap: 20px;
    align-items: center;
    display: flex;
    .profile-thumb {
      display: flex;
      justify-content: center;
      justify-self: flex-end;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
        background-color: black;
      }
      span {
        margin: 0 0 0 5px;
        line-height: 1;
        font-weight: bold;
        font-size: 14px;
        text-align: center;
      }
    }
  }
  .icon {
    font-size: 20px;
    cursor: pointer;
  }
  @media ${(p) => p.theme.media.ipad} {
    .left {
      form {
        input {
          width: 200px;
        }
      }
    }
  }
  @media ${(p) => p.theme.media.mobile} {
    padding: 15px 7px;
    .left {
      h3 {
        display: none;
      }
      form {
        input {
          display: none;
        }
      }
    }
  }
`;
