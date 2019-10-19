import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AvatarCircle } from 'components/atoms';
import { DropdownMenu } from 'components/molecules';
import { Color } from 'src/const';

interface Props {
  imageUrl: string;
  mypageUrl: string;
  handleLogout: () => void;
}

const AccountNav: React.FC<Props> = ({ imageUrl, mypageUrl, handleLogout }) => {
  const TitleContent = () => (
    <AvatarFrame>
      <AvatarCircle src={imageUrl} />
    </AvatarFrame>
  );
  const MenuContent = () => (
    <Ul>
      <Link to={mypageUrl}>
        <Li>マイページ</Li>
      </Link>
      <Li onClick={handleLogout}>ログアウト</Li>
    </Ul>
  );

  return (
    <>
      <DropdownMenu
        titleContent={<TitleContent />}
        menuContent={<MenuContent />}
        left={-85}
        top={45}
      />
    </>
  );
};

const AvatarFrame = styled.div`
  display: inline-block;
  height: 30px;
  width: 30px;
`;
const Ul = styled.ul`
  padding: 4px 0;
  box-sizing: border-box;
  width: 140px;
`;
const Li = styled.li`
  display: block;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 12px 16px;
  color: #555;

  &:hover {
    background-color: ${Color.BACKGROUND.LIGTH};
  }
`;

export default AccountNav;
