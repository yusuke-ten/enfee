import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { ReviewDetailModal } from 'components/organisms';

const useStateProps = () => {
  const { loaded, entities: reviewDetail } = useSelector(
    (state: RootState) => state.review.reviewDetail,
  );

  return { isLoading: !loaded, reviewDetail };
};

const ReviewsDetailModalContainer: React.FC<{
  onClose: () => void;
  open: boolean;
}> = ({ onClose, open }) => {
  // MEMO: reviewDetail取得アクションのディスパッチをここに移動したい
  //       review一覧ページとuserページで使用しているcomponentなので共通化できる
  //       url: reviews/:reviewId?...のようなURLからIDを取得してdispatchさせる
  //       そうすれば、上のcomponentではmodalを開く処理だけでよくなりシンプルになる
  const passProps = {
    ...useStateProps(),
    onClose,
    open,
  };

  return <ReviewDetailModal {...passProps} />;
};

export default ReviewsDetailModalContainer;
