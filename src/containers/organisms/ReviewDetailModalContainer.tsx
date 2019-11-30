import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules/reducer';
import { ReviewDetailModal } from 'components/organisms';

const useStateProps = () => {
  const { loaded, entities: reviewDetail } = useSelector(
    (state: RootState) => state.review.reviewDetail,
  );

  return { isLoading: !loaded, reviewDetail };
};

const useCommentProps = () => {
  const [commentValue, changeCommentValue] = useState<string>('');

  const commentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCommentValue(e.target.value);
  };

  const submitCommentHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`submit comment! value: ${commentValue}`);
    changeCommentValue('');
  };

  return { commentValue, commentChangeHandler, submitCommentHandler };
};

const ReviewsDetailModalContainer: React.FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  const passProps = {
    ...useStateProps(),
    ...useCommentProps(),
    closeModal,
  };

  return <ReviewDetailModal {...passProps} />;
};

export default ReviewsDetailModalContainer;
