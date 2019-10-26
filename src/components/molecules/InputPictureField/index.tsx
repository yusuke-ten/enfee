import React from 'react';
import styled from 'styled-components';
import {
  Picture,
  PlusIcon,
  InfoTxt,
  Heading,
  CameraIcon,
} from 'components/atoms';
import { PictureForm } from 'services/models';
import { Color, Size } from 'src/const';

export interface Picture {
  id: number;
  url: string;
  file: File;
}

interface Props {
  pictures: PictureForm[];
  handleChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxPicturesCount: number;
}

// fileChageHandlerはこれを参考に
// const { createObjectURL } = window.URL || window.webkitURL;
// const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { files } = e.target;
//   if (files && files.length !== 0) {
//     const imageUrl = createObjectURL(files[0]);
//   }
// };

const InputPictureField: React.FC<Props> = ({
  pictures,
  maxPicturesCount,
  handleChangeFile,
}) => {
  const InputFileComponent = () => (
    <Label htmlFor="pucture_file">
      <StyledPlusIcon height={24} width={24} />
      <StyledInfoTxt size="m">写真を追加</StyledInfoTxt>
      <input type="file" id="pucture_file" onChange={handleChangeFile} />
    </Label>
  );

  return (
    <>
      <TitleWrapper>
        <Heading type="h4">
          写真を追加
          <StyledCameraIcon height={14} width={14} color="gray" />
        </Heading>
      </TitleWrapper>
      <Container>
        {pictures.map((p, i) => (
          <PictureFrame key={i}>
            <span>
              <Picture src={p.url} />
            </span>
          </PictureFrame>
        ))}
        {pictures.length < maxPicturesCount && (
          <PictureFrame>
            <InputFileComponent />
          </PictureFrame>
        )}
      </Container>
    </>
  );
};

const TitleWrapper = styled.div`
  display: inline-block;
  padding: 8px 12px;
  background-color: ${Color.BACKGROUND.LIGTH};
`;
const StyledCameraIcon = styled(CameraIcon)`
  vertical-align: top;
  padding-left: 4px;
`;
const Label = styled.label`
  cursor: pointer;
  background-color: white;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 2px;
  box-sizing: border-box;
  border: 3px dashed #bcb7b7;
  border-radius: 3px;

  & input {
    display: none;
  }
`;
const StyledPlusIcon = styled(PlusIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StyledInfoTxt = styled(InfoTxt)`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: ${Size.FONT_WEIGHT.BOLD};
`;

// 参考:
// https://recost-design.com/2133.html (heigthをwidthと同値に設定する)
// https://migi.me/css/flexbox-margin-wrap/ (折返し要素のみにマージンをつける)
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 16px 10px;
  background-color: ${Color.BACKGROUND.LIGTH};
`;
const PictureFrame = styled.div`
  border: solid 1px #ded7c6;
  border-radius: 10px;
  width: calc(100% / 3);
  box-sizing: border-box;
  height: auto;
  position: relative;
  box-shadow: 1px 2px 3px 0 rgba(133, 131, 131, 0.3);

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
