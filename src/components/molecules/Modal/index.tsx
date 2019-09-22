import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CloseIcon, Line } from 'components/atoms';
import { Color, Size } from 'src/const';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  heading?: string;
}

const modalRoot = document.getElementById('modal-root') as Element;

const Modal: React.FC<Props> = ({ children, onClose, heading }) => {
  const modalUI = (
    <Container>
      <Inner>
        <Content>
          <Header>
            {heading && <Heading>{heading}</Heading>}
            <CloseButton onClick={onClose}>
              <CloseIcon height={12} width={12} color="gray" />
            </CloseButton>
          </Header>
          <Line />
          <Main>{children}</Main>
        </Content>
      </Inner>
    </Container>
  );

  return ReactDOM.createPortal(modalUI, modalRoot);
};

const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 2px;
`;
const Inner = styled.div`
  height: auto;
  display: flex;
  align-self: flex-start;
  padding: 7rem 0.625rem 7rem;
  margin: 0 auto;
  width: 100%;
  max-width: 725px;
  min-height: 250px;
  pointer-events: none;
`;
const Content = styled.div`
  overflow: initial;
  /* min-height: 80vh; */

  > * {
    pointer-events: all;
  }

  height: 100%;
  width: 100%;
  border-radius: 3px;
  background-color: white;
`;
const Header = styled.div`
  height: 40px;
  position: relative;
`;
const Heading = styled.div`
  font-size: ${Size.FONT_RATIO.BASE}rem;
  color: ${Color.FONT.DARK};
  line-height: 40px;
  text-align: center;
`;
const CloseButton = styled.span`
  padding: 6px;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`;
const Main = styled.div`
  height: 100%;
  padding: 30px 30px;
  word-wrap: break-word;
`;

export default Modal;
