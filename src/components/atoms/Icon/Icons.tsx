import React from 'react';
import styled, { css } from 'styled-components';
import { Color } from 'src/const';
import Envelope from './icons/envelope.svg';
import Comments from './icons/comments.svg';
import Home from './icons/home.svg';
import Search from './icons/search.svg';
import CommentDots from './icons/commentDots.svg';
import ThumbsUp from './icons/thumbsUp.svg';
import AlignLeft from './icons/alignLeft.svg';
import Pen from './icons/pen.svg';
import Twitter from './icons/twitter.svg';
import Close from './icons/close.svg';
import AngleUp from './icons/angleUp.svg';
import AngleDown from './icons/angleDown.svg';
import Plus from './icons/plus.svg';
import Camera from './icons/camera.svg';

export type ColorType = 'less' | 'primary' | 'gray' | 'black';

interface Props {
  color?: ColorType;
  width?: number;
  height?: number;
}

const DEFAULT_COLOR = 'less';
const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 10;

// TODO: リファクタリングする
// この状態だとiconを追加するのが大変
export const EnvelopeIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => <StyledEnvelopeIcon color={color} height={height} width={width} />;

export const CommentsIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => <StyledCommentsIcon color={color} height={height} width={width} />;

export const HomeIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => <StyledHomeIcon color={color} height={height} width={width} />;

export const SearchIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => <StyledSearchIcon color={color} height={height} width={width} />;

export const CommentDotsIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => <StyledCommentDotsIcon color={color} height={height} width={width} />;

export const ThumbsUpIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => <StyledThumbsUpIcon color={color} height={height} width={width} />;

export const AlignLeftIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => <StyledAlignLeftIcon color={color} height={height} width={width} />;

export const PenIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => <StyledPenIcon color={color} height={height} width={width} />;

export const TwitterIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => <StyledTwitterIcon color={color} height={height} width={width} />;

export const CloseIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => <StyledCloseIcon color={color} height={height} width={width} />;

export const AngleUpIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => <StyledAngleUpIcon color={color} height={height} width={width} />;

export const AngleDownIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => <StyledAngleDownIcon color={color} height={height} width={width} />;

export const PlusIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  ...props
}) => <StyledPlusIcon color={color} height={height} width={width} {...props} />;

export const CameraIcon: React.FC<Props> = ({
  color = DEFAULT_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  ...props
}) => (
  <StyledCameraIcon color={color} height={height} width={width} {...props} />
);

const colorPallete: { [k in ColorType]: string } = {
  gray: Color.FONT.BASE,
  less: Color.FONT.LESS,
  primary: Color.THEME.PRIMARY,
  black: Color.FONT.DARK,
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
const StyledAlignLeftIcon = styled(AlignLeft)<StyleProps>`
  ${props => getStyles(props.color)}
`;
const StyledPenIcon = styled(Pen)<StyleProps>`
  ${props => getStyles(props.color)}
`;
const StyledTwitterIcon = styled(Twitter)<StyleProps>`
  ${props => getStyles(props.color)}
`;
const StyledCloseIcon = styled(Close)<StyleProps>`
  ${props => getStyles(props.color)}
`;
const StyledAngleUpIcon = styled(AngleUp)<StyleProps>`
  ${props => getStyles(props.color)}
`;
const StyledAngleDownIcon = styled(AngleDown)<StyleProps>`
  ${props => getStyles(props.color)}
`;
const StyledPlusIcon = styled(Plus)<StyleProps>`
  ${props => getStyles(props.color)}
`;
const StyledCameraIcon = styled(Camera)<StyleProps>`
  ${props => getStyles(props.color)}
`;
