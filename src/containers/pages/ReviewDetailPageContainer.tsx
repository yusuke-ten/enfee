import React, { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReviewDetailPage } from 'components/pages';

/* モックデータ */
import reviewDetailData from 'src/services/mocks/reviewDetail.json';
import camelcaseKeys from 'camelcase-keys';
import { ReviewDetail } from 'src/services/models/reviewDetail';

const reviewDetail = camelcaseKeys(reviewDetailData, {
  deep: true,
}) as ReviewDetail;

const ReviewPageContainer: React.FC<
  RouteComponentProps & { closeModal: () => void }
> = ({ closeModal }) => {
  const isLoading = false;

  return <ReviewDetailPage {...{ reviewDetail, isLoading, closeModal }} />;
};

export default withRouter(ReviewPageContainer);
