import React from 'react';
import { storiesOf } from '@storybook/react';
// import { object } from '@storybook/addon-knobs';
// import camelcaseKeys from 'camelcase-keys';

import StorybookSample from './StorybookSample';
// import { Repository } from '../../services/github/models';
// import data from '../../services/github/__mocks__/repositories.json';

// const repositories = camelcaseKeys(data, {
//   deep: true,
// }) as Repository[];

storiesOf('Sample/', module).add('sample', () => <StorybookSample />);
