import React from 'react';
import styled from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { AvatarCircle } from 'components/atoms';
import { Color, Mock } from 'src/const';
import Dropdown from '.';

const Title = () => <Text>メニュー</Text>;
const AccountTitle = () => (
  <AvatarFrame>
    <AvatarCircle src={Mock.imageUrl} />
  </AvatarFrame>
);
const Menu = () => (
  <Ul>
    <li>マイページ</li>
    <li>ログアウト</li>
  </Ul>
);

storiesOf('molecules/Dropdown', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/reviews']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Header>
      <Item>
        <Dropdown
          titleContent={<Title />}
          menuContent={<Menu />}
          allowPos="topLeft"
          left={20}
        />
      </Item>
      <Item>
        <Dropdown titleContent={<Title />} menuContent={<Menu />} />
      </Item>
      <Item>
        <Dropdown
          titleContent={<AccountTitle />}
          menuContent={<Menu />}
          left={-74}
        />
      </Item>
    </Header>
  ));

const Text = styled.div`
  height: 100%;
  font-size: 14px;
`;
const AvatarFrame = styled.div`
  display: inline-block;
  height: 30px;
  width: 30px;
`;
const Ul = styled.ul`
  padding: 14px;
  width: 100px;
  text-align: center;
  font-size: 14px;
`;
const Header = styled.div`
  background-color: ${Color.THEME.PRIMARY};
  height: 40px;
  display: flex;
`;
const Item = styled.div`
  height: 100%;
  padding: 0 10px;
  margin-left: 120px;
`;
