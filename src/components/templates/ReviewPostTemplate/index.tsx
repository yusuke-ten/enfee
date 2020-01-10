import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import ReviewPostForm, {
  Props as ReviewPostFormProps,
} from 'components/organisms/ReviewPostForm';
import { MyProfileInAside } from 'services/models';
import { Color } from 'src/const';
import { getPageTitle } from 'src/const/PageTitle';

type Props = ReviewPostFormProps & {
  myProfile: MyProfileInAside | null;
  isLoggedIn: boolean;
};

const ReviewPostTemplate: React.FC<Props> = ({
  reviewPostFormItems,
  myProfile,
  isLoggedIn,
  ...props
}) => {
  return (
    <Layout title={getPageTitle['/reviews/new']()} {...props} withHeader>
      <Body>
        <Contents>
          <FormWrapper>
            <ReviewPostForm reviewPostFormItems={reviewPostFormItems} />
          </FormWrapper>
        </Contents>
      </Body>
    </Layout>
  );
};

const Body = styled.div`
  min-height: calc(100vh - 50px);
  padding: 32px 16px;
  background-color: ${Color.BACKGROUND.LIGTH};
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const FormWrapper = styled.div`
  padding: 20px 50px;
  width: 620px;
  background-color: white;
  box-shadow: 1px 2px 4px 0 rgba(133, 131, 131, 0.5);
`;

export default ReviewPostTemplate;
