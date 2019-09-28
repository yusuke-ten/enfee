import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReviewDetailPage } from 'components/pages';

/* モックデータ */
import reviewDetailData from 'src/services/mocks/reviewDetail.json';
import camelcaseKeys from 'camelcase-keys';
import { ReviewDetail } from 'src/services/models/reviewDetail';

const tmpReviewDetail = camelcaseKeys(reviewDetailData, {
  deep: true,
}) as { [k: string]: any };
const reviewDetail = tmpReviewDetail as ReviewDetail;

const ReviewsPageContainer: React.FC<
  RouteComponentProps & { closeModal: () => void }
> = ({ closeModal }) => {
  const [commentValue, changeCommentValue] = useState<string>('');

  const commentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCommentValue(e.target.value);
  };

  const submitCommentHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`submit comment! value: ${commentValue}`);
    changeCommentValue('');
  };

  const isLoading = false;

  return (
    <ReviewDetailPage
      {...{
        reviewDetail,
        isLoading,
        closeModal,
        commentValue,
        commentChangeHandler,
        submitCommentHandler,
      }}
    />
  );
};

export default withRouter(ReviewsPageContainer);
