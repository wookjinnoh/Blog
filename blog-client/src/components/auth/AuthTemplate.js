// 회원가입, 로그인 레이아웃 컴포넌트
import styled from 'styled-components';
import palette from '../../lib/palette';
import Welcome from '../images/WelcomeImage.png';
import { Link } from 'react-router-dom';

const AuthTemplate = ({ children }) => {
  return (
    <StyledAuthTemplate>
      <StyledBox>
        <div className="logo-area">
          <Link to="/">
            <img src={Welcome} alt="Welcome Image" />
          </Link>
        </div>
        <div>{children}</div>
      </StyledBox>
    </StyledAuthTemplate>
  );
};

export default AuthTemplate;

const StyledAuthTemplate = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBox = styled.div`
  .logo-area {
    margin-right: 2rem;
    padding: 7rem 0.5rem;
    img {
      width: 150px;
    }
    border-right: 0.5px solid ${palette.gray[4]};
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  display: flex;
  width: 480px;
  background: ${palette.gray[0]};
  border-radius: 2px;
`;
