import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import { Header } from 'components/organisms';
import ReviewPostForm, {
  Props as ReviewPostFormProps,
} from 'components/organisms/ReviewPostForm';
import { Color } from 'src/const';

type Props = ReviewPostFormProps;

const ReviewPostTemplate: React.FC<Props> = ({
  reviewPostFormItems,
  ...props
}) => {
  return (
    <Layout title="レビュー投稿ページ" {...props}>
      <Header />
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
