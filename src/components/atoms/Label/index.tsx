import styled from 'styled-components';
import { Color, Size } from 'src/const';

const Label = styled.label<{ isHidden?: boolean; isError?: boolean }>`
  visibility: ${props =>
    props.isHidden && !props.isError ? 'hidden' : 'visible'};
  font-size: ${Size.FONT.SMALL}px;
  color: ${props => (props.isError ? Color.THEME.ERROR : Color.THEME.PRIMARY)};
  padding: 0 5px;
`;

export default Label;
