import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import EditProfile, { EditProfileProps } from 'components/organisms/EditProfile';
import { getPageTitle, Color, Size } from 'src/const';

const SettingsProfileTemplate: React.FC<EditProfileProps> = props => {
  return (
    <Layout withHeader title={getPageTitle['/settings/profile']()}>
      <Body>
        <Frame>
          <EditProfile {...props} />
        </Frame>
      </Body>
    </Layout>
  );
};

const Body = styled.div`
  min-height: calc(100vh - ${Size.HEADER.HEIGHT}px);
  background-color: ${Color.BACKGROUND.LIGTH};
  box-sizing: border-box;
`;
const Frame = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 0;
`;

export default SettingsProfileTemplate;
