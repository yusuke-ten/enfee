import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Picture from '.';

const sampleImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9hHEP9QVmWVhBXU_7f2mDeKnY5lYgp2ulLlhlla2gnmZpebruQ';

storiesOf('atoms/Picture', module).add('default', () => (
  <Wrapper>
    <Picture src={sampleImage} />
  </Wrapper>
));

const Wrapper = styled.div`
  width: 210px;
  height: 150px;
`;
