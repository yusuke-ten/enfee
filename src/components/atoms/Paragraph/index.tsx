import styled from 'styled-components';
import { Color, Size } from 'src/const';

const Paragraph = styled.p`
  color: ${Color.FONT.BASE};
  font-size: ${Size.FONT_RATIO.SMALL}rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`;

export default Paragraph;
