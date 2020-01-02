import { keyframes } from 'styled-components';

export const fadeInDown = (startPos: number) => keyframes`
  0% {
    opacity: 0;
    transform: translateY(-${startPos}px);
    -webkit-transform: translateY(-${startPos}px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }
`;
