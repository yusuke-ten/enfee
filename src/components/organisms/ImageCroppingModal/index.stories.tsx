import React from 'react';
import { storiesOf } from '@storybook/react';
import pandaImage from 'services/mocks/images/panda.png';
import ImageCroppingModal, { ImageCroppingModalProps } from '.';

const props: ImageCroppingModalProps = {
  onClose: () => {},
  open: true,
  image: {
    src: pandaImage,
    fileName: 'panda',
  },
  handleSetAvatar: () => {},
  undoAvatarProps: () => {},
};

storiesOf('organisms/ImageCroppingModal', module).add('default', () => (
  <ImageCroppingModal {...props} />
));
