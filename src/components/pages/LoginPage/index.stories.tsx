import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import LoginPage from '.';

storiesOf('pages/LoginPage', module).add('default', () => <LoginPage />);
