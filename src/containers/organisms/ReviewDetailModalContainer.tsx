import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReviewDetailModal } from 'components/organisms';

/* モックデータ */
import reviewDetailData from 'src/services/mocks/json/reviewDetail.json';
import camelcaseKeys from 'camelcase-keys';
import { ReviewDetail } from 'src/services/models/reviewDetail';

const tmpReviewDetail = camelcaseKeys(reviewDetailData, {
  deep: true,
}) as { [k: string]: any };
const reviewDetail = tmpReviewDetail as ReviewDetail;

const ReviewsDetailModalContainer: React.FC<
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
    <ReviewDetailModal
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

export default withRouter(ReviewsDetailModalContainer);
