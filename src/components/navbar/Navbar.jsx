import styled from "styled-components";
import { GrHome } from "react-icons/gr";
import { TbMoon } from "react-icons/tb";
import { FiMail, FiGrid } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdNotificationsNone } from "react-icons/md";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="left">
        <h3>myface social</h3>
        <GrHome className="icon" />
        <TbMoon className="icon" />
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
          <img src="" alt="profile pic" />
          <span>John Doe</span>
        </div>
      </div>
    </NavbarWrapper>
  );
};
export default Navbar;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px lightgray solid;
  padding: 10px 20px;
  .left {
    display: flex;
    align-items: center;
    gap: 14px;
    h3 {
      margin: 0 1rem 0 0;
      color: #3232e0;
    }
    input {
      padding: 7px 10px;
      border-radius: 5px;
      border: 1px lightgrey solid;
      width: 400px;
      margin-left: 6rem;
    }
  }
  .right {
    gap: 14px;
    align-items: center;
    display: flex;
    .profile-thumb {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
        background-color: black;
      }
      span {
        font-weight: bold;
      }
    }
  }
  .icon {
    font-size: 20px;
    cursor: pointer;
  }
`;
