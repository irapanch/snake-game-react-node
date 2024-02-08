import React from 'react';
import { VscSnake } from 'react-icons/vsc';

import {
  ButtonPlay,
  ClientBox,
  CoinImg,
  Content,
  Header,
  LogoSnake,
} from './Layout.styled';
import GameBox from 'components/GameBox/GameBox';

const Layout = () => {
  return (
    <>
      <Header>
        <LogoSnake>
          <VscSnake />
        </LogoSnake>

        <h1>Snake game</h1>
      </Header>
      <ClientBox>
        <Content>Your points : 0 </Content>
        <CoinImg />
      </ClientBox>
      <ButtonPlay>Let's play!</ButtonPlay>
      <GameBox />
    </>
  );
};

export default Layout;
