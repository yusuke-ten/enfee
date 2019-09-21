import React, { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReviewPage } from 'components/pages';
import { actionCreators } from 'src/modules/app';

const ReviewPageContainer: React.FC<RouteComponentProps<{ store: string }>> = ({
  history,
  match,
}) => {
  const isLoadingReview = false;

  const { store } = match.params;

  return <ReviewPage {...{ isLoadingReview }} />;
};

export default withRouter(ReviewPageContainer);
