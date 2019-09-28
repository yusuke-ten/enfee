import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Card from '.';

storiesOf('atoms/Card', module)
  .add('default', () => (
    <Card>
      <div style={{ color: 'gray' }}>
        影なしのCardコンポーネント <br />
        影なしのCardコンポーネント <br />
        影なしのCardコンポーネント <br />
        影なしのCardコンポーネント <br />
      </div>
    </Card>
  ))
  .add('shadow', () => (
    <Card shadow={boolean('shadow', true)}>
      <div style={{ color: 'gray' }}>
        影付きのCardコンポーネント <br />
        影付きのCardコンポーネント <br />
        影付きのCardコンポーネント <br />
        影付きのCardコンポーネント <br />
      </div>
    </Card>
  ));
