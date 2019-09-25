import React from 'react';
import { storiesOf } from '@storybook/react';
import { Mock } from 'src/const';
import MediaObjectLayout from '.';

storiesOf('atoms/MediaObjectLayout', module).add('default', () => (
  <MediaObjectLayout tag="section">
    <img src={Mock.imageUrl} alt="story" width="60" height="60" />
    <div>
      <p>ここに名前が</p>
      <p>ここにログインネームが(ﾟДﾟ)</p>
      <p>ここにプロフィールが( ﾟдﾟ )</p>
    </div>
  </MediaObjectLayout>
));
