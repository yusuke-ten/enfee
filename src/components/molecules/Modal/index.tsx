import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { CloseIcon, Line } from 'components/atoms';
import { Color, Size } from 'src/const';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  heading?: string;
  open: boolean;
}

const modalRoot = document.getElementById('modal-root') as Element;

const Modal: React.FC<Props> = ({ children, onClose, heading, open }) => {
  const modalUI = (
    <Container onClick={onClose} open={open}>
      <Inner>
        <Content onClick={e => e.stopPropagation()}>
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

const Container = styled.div<{ open: boolean }>`
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
  border-radius: 1px;
  ${props =>
    !props.open &&
    css`
      display: none;
    `}
`;
const Inner = styled.div`
  height: auto;
  display: flex;
  align-self: flex-start;
  padding: 7rem 0.625rem 7rem;
  margin: 0 auto;
  pointer-events: none;
`;
const Content = styled.div`
  border-radius: 3px;
  overflow: initial;
  height: 100%;
  width: 100%;
  background-color: white;

  > * {
    pointer-events: all;
  }
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
const CloseButton = styled.button`
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: ${Color.THEME.BACKGROUND};
  }
`;
const Main = styled.div`
  height: 100%;
  padding: 30px 30px;
  word-wrap: break-word;
`;

export default Modal;
