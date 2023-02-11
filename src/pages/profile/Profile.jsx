import styled from "styled-components";
import PersonalInfo from "../../components/personalInfo/PersonalInfo";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <ProfileWrapper>
      <PersonalInfo />
      <Posts />
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.main`
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background-color: ${(p) => p.theme.backgroundSoft};
  @media ${(p) => p.theme.media.ipad} {
    padding: 15px 10px;
  }
`;
