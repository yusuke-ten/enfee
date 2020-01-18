import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Modal } from 'components/molecules';
import { Button, ImageIcon } from 'components/atoms';
import { createObjectURL } from 'src/utils/file';

export interface ImageCroppingModalProps {
  onClose: () => void;
  open: boolean;
  image: {
    src: string;
    fileName: string;
    raw?: File | null;
  };
  handleSetAvatar: (imageUrl: string, file: File) => void;
  undoAvatarProps: () => void;
}

const ImageCroppingModal: React.FC<ImageCroppingModalProps> = ({
  open,
  onClose,
  image,
  handleSetAvatar,
  undoAvatarProps,
}) => {
  const onCloseWrapper = () => {
    undoAvatarProps();
    onClose();
  };

  return (
    <Modal onClose={onCloseWrapper} open={open}>
      <Cropping
        imageUrl={image.src}
        fileName={image.fileName}
        handleSetAvatar={handleSetAvatar}
        onClose={onClose}
      />
    </Modal>
  );
};

const inputCanvas = { width: 400, height: 400 };
const outCanvas = { width: 300, height: 300 };
const minScale = 10;
const maxScale = 200;

const Cropping: React.FC<{
  imageUrl: string;
  fileName: string;
  handleSetAvatar: (imageUrl: string, file: File) => void;
  onClose: () => void;
}> = ({ imageUrl, fileName, handleSetAvatar, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const outCanvasRef = useRef<HTMLCanvasElement>(null);
  const imageSize = useRef({ width: 0, height: 0 });
  const scaleRef = useRef(0);
  const imageCenterC = useRef({ x: 0, y: 0 });
  const [scale, setScale] = useState(0);
  const mouseDown = useRef(false);

  const img = useRef<HTMLImageElement>(new Image());

  const drawCanvas = (_x: number, _y: number) => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      ctx.fillStyle = 'rgb(200, 200, 200)';
      ctx.fillRect(0, 0, inputCanvas.width, inputCanvas.height); // 背景を塗る
      ctx.drawImage(
        img.current,
        0,
        0,
        imageSize.current.width,
        imageSize.current.height,
        inputCanvas.width / 2 - _x * scaleRef.current,
        inputCanvas.height / 2 - _y * scaleRef.current,
        imageSize.current.width * scaleRef.current,
        imageSize.current.height * scaleRef.current,
      );
      // 切り抜きサイズの四角を描く
      ctx.strokeStyle = 'rgba(0, 123, 255, 0.8)';
      ctx.lineWidth = 1;
      ctx.strokeRect(
        (inputCanvas.width - outCanvas.width) / 2,
        (inputCanvas.height - outCanvas.height) / 2,
        outCanvas.width,
        outCanvas.height,
      );
      // アバター画像に適用される位置の円を描く
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.lineWidth = 0.1;
      ctx.beginPath();
      ctx.arc(
        (inputCanvas.width - outCanvas.width) / 2 + outCanvas.width / 2,
        (inputCanvas.height - outCanvas.height) / 2 + outCanvas.height / 2,
        outCanvas.width / 2,
        0,
        2 * Math.PI,
      );
      ctx.stroke();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fill();
    }
  };

  img.current.onload = () => {
    // imageの中心位置をstateに保存
    imageCenterC.current = {
      x: img.current.width / 2,
      y: img.current.height / 2,
    };

    // imageの画像サイズをstateに保存
    imageSize.current = {
      width: img.current.width,
      height: img.current.height,
    };

    // スケーリング
    const scl = Number((inputCanvas.width / img.current.width) * 100);
    setScale(scl);

    // scaling(scl);
    scaleRef.current = scl * 0.01;

    // 描画
    drawCanvas(img.current.width / 2, img.current.height / 2);
  };

  useEffect(() => {
    img.current.src = imageUrl;
  }, [imageUrl]);

  // 拡大縮小率
  const onChangeScale = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setScale(v);
    scaleRef.current = v * 0.01;
    drawCanvas(imageCenterC.current.x, imageCenterC.current.y);
  };

  const sx = useRef(0); // canvas ドラッグ開始位置
  const sy = useRef(0);

  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    mouseDown.current = true;
    sx.current = e.pageX;
    sy.current = e.pageY;
  };

  const onMouseUp = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (mouseDown.current === false) return;
    mouseDown.current = false;
    drawCanvas(
      (imageCenterC.current.x += (sx.current - e.pageX) / scaleRef.current),
      (imageCenterC.current.y += (sy.current - e.pageY) / scaleRef.current),
    );
  };

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (mouseDown.current === false) return;
    drawCanvas(
      imageCenterC.current.x + (sx.current - e.pageX) / scaleRef.current,
      imageCenterC.current.y + (sy.current - e.pageY) / scaleRef.current,
    );
  };

  const cropImg = () => {
    if (outCanvasRef.current) {
      const ctx = outCanvasRef.current.getContext('2d');
      if (!ctx) return;
      ctx.fillStyle = 'rgb(200, 200, 200)';
      ctx.fillRect(0, 0, outCanvas.width, outCanvas.height); // 背景を塗る
      ctx.drawImage(
        img.current,
        0,
        0,
        img.current.width,
        img.current.height,
        outCanvas.width / 2 - imageCenterC.current.x * scaleRef.current,
        outCanvas.height / 2 - imageCenterC.current.y * scaleRef.current,
        img.current.width * scaleRef.current,
        img.current.height * scaleRef.current,
      );
    }
  };

  const generateFileData = (): [string, File] | null => {
    if (outCanvasRef.current) {
      // canvas -> base64
      const base64 = outCanvasRef.current.toDataURL('image/png');
      // base64 -> binary
      const bin = atob(base64.replace(/^.*,/, ''));
      const buffer = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
      }
      // binary -> File
      const file = new File([buffer.buffer], `${fileName}.png`, {
        type: 'image/png',
      });

      return [createObjectURL(file), file];
    }

    return null;
  };

  const scaling = (_v: number) => {
    scaleRef.current = _v * 0.01;
    drawCanvas(imageCenterC.current.x, imageCenterC.current.y);
  };

  const onWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    let scl = scale + e.deltaY * 0.05;
    if (scl < minScale) scl = minScale;
    if (scl > maxScale) scl = maxScale;
    setScale(scl);
    scaling(scl);
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (mouseDown.current === false) return;
    mouseDown.current = false;
    drawCanvas(
      (imageCenterC.current.x += (sx.current - e.pageX) / scaleRef.current),
      (imageCenterC.current.y += (sy.current - e.pageY) / scaleRef.current),
    );
  };

  const handleApply = () => {
    cropImg();
    const fileData = generateFileData();
    if (fileData) {
      handleSetAvatar(...fileData);
      onClose();
    }
  };

  return (
    <>
      <ScalingBarWrapper>
        <ScalingBar>
          <IconImage>
            <ImageIcon height={14} width={14} color="gray" />
          </IconImage>
          <input
            id="scal"
            type="range"
            value={scale}
            min={minScale}
            max={maxScale}
            onChange={onChangeScale}
            style={{ width: '300px' }}
          />
          <IconImage right>
            <ImageIcon height={20} width={20} color="gray" />
          </IconImage>
        </ScalingBar>
      </ScalingBarWrapper>
      <div>
        <canvas
          id="canvas"
          ref={canvasRef}
          width={inputCanvas.width}
          height={inputCanvas.height}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onWheel={onWheel}
          onMouseLeave={onMouseLeave}
        />
        <br />
        <canvas
          id="out"
          ref={outCanvasRef}
          width={outCanvas.width}
          height={outCanvas.height}
          hidden
        />
        <ButtonWrapper>
          <br />
          <Button size="midium" shape="oval" onClick={handleApply}>
            適用
          </Button>
        </ButtonWrapper>
      </div>
    </>
  );
};

const ScalingBarWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-bottom: 10px;
`;
const ScalingBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconImage = styled.span<{ right?: boolean }>`
  ${props =>
    props.right
      ? css`
          padding-left: 8px;
        `
      : css`
          padding-right: 8px;
        `}
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ImageCroppingModal;
