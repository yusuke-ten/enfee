import React from 'react';
import styled, { css } from 'styled-components';
import { Color } from 'src/const';
import Envelope from './icons/envelope.svg';
import Comments from './icons/comments.svg';
import Home from './icons/home.svg';
import Search from './icons/search.svg';
import CommentDots from './icons/commentDots.svg';
import ThumbsUp from './icons/thumbsUp.svg';

export type ColorType = 'less' | 'primary' | 'gray';

interface Props {
  color?: ColorType;
  width?: number;
  height?: number;
}

export const EnvelopeIcon: React.FC<Props> = ({
  color = 'less',
  width = 10,
  height = 10,
}) => <StyledEnvelopeIcon color={color} height={height} width={width} />;

export const CommentsIcon: React.FC<Props> = ({
  color = 'less',
  width = 10,
  height = 10,
}) => <StyledCommentsIcon color={color} height={height} width={width} />;

export const HomeIcon: React.FC<Props> = ({
  color = 'less',
  width = 10,
  height = 10,
}) => <StyledHomeIcon color={color} height={height} width={width} />;

export const SearchIcon: React.FC<Props> = ({
  color = 'less',
  width = 10,
  height = 10,
}) => <StyledSearchIcon color={color} height={height} width={width} />;

export const CommentDotsIcon: React.FC<Props> = ({
  color = 'less',
  width = 10,
  height = 10,
}) => <StyledCommentDotsIcon color={color} height={height} width={width} />;

export const ThumbsUpIcon: React.FC<Props> = ({
  color = 'less',
  width = 10,
  height = 10,
}) => <StyledThumbsUpIcon color={color} height={height} width={width} />;

const colorPallete: { [k in ColorType]: string } = {
  gray: Color.FONT.BASE,
  less: Color.FONT.LESS,
  primary: Color.THEME.PRIMARY,
};

const getStyles = (color: ColorType) => {
  return css`
    fill: ${colorPallete[color]};
    stroke: ${colorPallete[color]};
  `;
};

interface StyleProps {
  color: ColorType;
}

const StyledEnvelopeIcon = styled(Envelope)<StyleProps>`
  ${props => getStyles(props.color)}
`;
const StyledCommentsIcon = styled(Comments)<StyleProps>`
  ${props => getStyles(props.color)}
`;
const StyledHomeIcon = styled(Home)<StyleProps>`
  ${props => getStyles(props.color)}
`;
const StyledSearchIcon = styled(Search)<StyleProps>`
  ${props => getStyles(props.color)}
`;
const StyledCommentDotsIcon = styled(CommentDots)<StyleProps>`
  ${props => getStyles(props.color)}
`;
const StyledThumbsUpIcon = styled(ThumbsUp)<StyleProps>`
  ${props => getStyles(props.color)}
`;
