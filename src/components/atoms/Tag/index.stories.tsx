import React from 'react';
import { storiesOf } from '@storybook/react';
import { CategoryTag } from '.';

storiesOf('atoms/Tag', module).add('CategoryTag', () => (
  <CategoryTag text="おにぎり" />
));
