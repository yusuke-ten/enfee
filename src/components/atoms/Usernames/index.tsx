import React from 'react';
import styled from 'styled-components';
import { Size, Color } from 'src/const';

interface Props {
  displayName: string;
  loginName: string;
  isSmall?: boolean;
  align?: 'left' | 'center';
}

const UserNames: React.FC<Props> = ({
  displayName,
  loginName,
  isSmall = false,
  align = 'left',
}) => (
  <>
    <DisplayName {...{ isSmall, align }}>{displayName}</DisplayName>
    <LoginName {...{ isSmall, align }}>{loginName}</LoginName>
  </>
);

type StyleProps = Required<Pick<Props, 'isSmall' | 'align'>>;

const DisplayName = styled.div<StyleProps>`
  font-size: ${props =>
    props.isSmall ? Size.FONT_RATIO.BASE : Size.FONT_RATIO.MEDIUM}rem;
  color: ${Color.FONT.SUPER_DARK};
  text-align: ${props => props.align};
  padding-bottom: 3px;
`;
const LoginName = styled.div<StyleProps>`
  font-size: ${props =>
    props.isSmall ? Size.FONT_RATIO.SMALL : Size.FONT_RATIO.BASE}rem;
  color: ${Color.FONT.DARK};
  text-align: ${props => props.align};
`;

export default UserNames;
