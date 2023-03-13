import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  & button {
    padding: 10px;
    margin: 12px;
    font-size: 24px;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgb(179, 176, 249);
    cursor: pointer;
    &:hover {
      background-color: rgb(179, 176, 249);
    }
    &:active {
      background-color: rgb(83, 74, 255);
      padding: 15px;
      margin: 2px;

      font-size: 29px;
      box-shadow: 9px 9px 15px rgb(83, 74, 255);
    }
  }
`;
