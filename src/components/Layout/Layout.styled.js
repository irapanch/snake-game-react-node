import styled from 'styled-components';
import coinImage from './../../img/coin.gif';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 40px;
  color: green;
  border-bottom: 2.5px solid rgba(0, 189, 31, 0.75);
`;

export const LogoSnake = styled.div`
  width: 40px;
  height: 40px;
  color: green;
  > svg {
    width: 40px;
    height: 40px;
  }
`;

export const ClientBox = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  > svg {
    width: 20px;
    height: 20px;
    fill: rgb(255 230 0);
  }
`;
export const Content = styled.h2`
  margin: 0;
  border-bottom: 2.5px solid rgba(255, 255, 255, 0.75);
  padding-bottom: 5px;
  /* padding-top: 40px; */
`;

export const CoinImg = styled.div`
  background-image: url(${coinImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 40px;
  width: 40px;
`;

export const ButtonPlay = styled.button`
  margin-bottom: 40px;
  background-color: inherit;
  border: none;
  font-size: 36px;
  font-weight: 800;
  line-height: 1.25;
  color: green;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    box-shadow: -1px -1px 20px 13px lightgreen;
    background-color: lightgreen;
    opacity: 0.8;
    color: #000;
    border-radius: 10px;
  }
`;
