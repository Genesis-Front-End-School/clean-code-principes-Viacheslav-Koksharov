import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  display: flex;
  padding: 5px;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
`;

const Sun = styled.svg`
  height: auto;
  width: 2.5rem;
  transition: all 0.7s linear;
`;

const Moon = styled.svg`
  height: auto;
  width: 2.5rem;
  transition: all 0.7s linear;
`;

export { Button, Sun, Moon };
