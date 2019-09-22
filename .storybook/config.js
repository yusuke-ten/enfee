import {configure, addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';

import '../src/styles/reset.css';

const req = require.context('../src/components', true, /.(story|stories).tsx$/);

function loadStories() {
  addDecorator(withInfo);
  addDecorator(withKnobs);
  req.keys().forEach(req);
}

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.append(modalRoot);

configure(loadStories, module);
