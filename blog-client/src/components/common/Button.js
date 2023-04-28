import styled from 'styled-components';
import palette from '../../lib/palette';

const Button = (props) => <StyledButton {...props} />;

export default Button;

const StyledButton = styled.button`
  border: none;
  border-radius: 3px;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.teal[6]};
  &:hover {
    background: ${palette.teal[4]};
  }
`;
