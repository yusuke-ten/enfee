import React from 'react';
import styled from 'styled-components';
import { Picture } from 'components/atoms';
import { Color, Size } from 'src/const';

interface Props {
  pictures: string[];
}

const InputPictureField: React.FC<Props> = ({ pictures }) => {
  return (
    <Container>
      {pictures.map(picture => (
        <PictureFrame>
          <span>
            <Picture src={picture} />
          </span>
        </PictureFrame>
      ))}
    </Container>
  );
};

// 参考:
// https://recost-design.com/2133.html (heigthをwidthと同値に設定する)
// https://migi.me/css/flexbox-margin-wrap/ (折返し要素のみにマージンをつける)
const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 16px 10px;
  background-color: ${Color.BACKGROUND.LIGTH};
  margin-top: -16px;
`;
const PictureFrame = styled.div`
  border: solid 1px #ded7c6;
  border-radius: 10px;
  width: calc(100% / 3);
  box-sizing: border-box;
  height: auto;
  position: relative;
  box-shadow: 1px 2px 3px 0 rgba(133, 131, 131, 0.3);
  margin-top: 16px;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  & span {
    background-color: skyblue;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 2px;
    box-sizing: border-box;
  }
`;

export default InputPictureField;
