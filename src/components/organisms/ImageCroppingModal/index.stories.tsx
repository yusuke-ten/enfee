import React from 'react';
import { storiesOf } from '@storybook/react';
import pandaImage from 'services/mocks/images/panda.png';
import ImageCroppingModal from '.';

const image = {
  src: pandaImage,
  fileName: 'panda',
};

storiesOf('organisms/ImageCroppingModal', module).add('default', () => (
  <ImageCroppingModal onClose={() => {}} image={image} open />
));
