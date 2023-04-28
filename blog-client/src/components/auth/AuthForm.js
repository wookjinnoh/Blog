// 회원가입, 로그인 폼
import styled from 'styled-components';
import palette from '../../lib/palette';

import { Link } from 'react-router-dom';
import Button from '../common/Button';

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <StyledAuthForm>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디를 입력하세요."
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요."
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요."
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <StyledButton>{text}</StyledButton>
      </form>
      <StyledFooter>
        {type === 'login' ? (
          <>
            <span>아직 회원이 아니신가요? </span>
            <Link to="/register">회원가입</Link>
          </>
        ) : (
          <>
            <span>회원이신가요? </span>
            <Link to="/login">로그인</Link>
          </>
        )}
      </StyledFooter>
    </StyledAuthForm>
  );
};

export default AuthForm;

const StyledAuthForm = styled.div`
  position: relative;
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border: 1px solid ${palette.gray[2]};
  padding: 0.5rem 0.5rem;
  outline: none;
  width: 86%;
  &:focus {
    color: $oc-teal-7;
    border: 1px solid ${palette.teal[2]};
  }
  &::placeholder {
    font-size: 0.75rem;
  }
  & + & {
    margin-top: 0.5rem;
  }
`;
const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  font-size: 0.8rem;
  text-align: right;
  a {
    color: ${palette.teal[6]};
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;
