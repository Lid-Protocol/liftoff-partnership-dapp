import styled from 'styled-components';
import { Button as UnstyledButton } from 'rebass';
import { Colors } from 'theme/styled';

const Button = styled(UnstyledButton)<{ bgColor?: keyof Colors }>`
  font-family: 'Open Sans', sans-serif;
  padding: 0.7rem 2rem 0.7rem 2rem;
  border-radius: 5px;
  height: fit-content;
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: ${({ bgColor, theme }) =>
    (theme as any)[bgColor || 'primary1']};
  color: ${({ theme }) => theme.white};
`;

export default Button;
