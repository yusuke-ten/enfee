import styled from 'styled-components';
import { Color, Size } from 'src/const';

const Paragraph = styled.p<{ size?: keyof typeof Size.MAPPING }>`
  color: ${Color.FONT.BASE};
  font-size: ${({ size = 's' }) => Size.MAPPING[size]}rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`;

export default Paragraph;
