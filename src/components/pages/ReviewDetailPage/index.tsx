import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'components/atoms';
import { Modal } from 'components/molecules';
import { ReviewDetail } from 'services/models/reviewDetail';

interface Props {
  reviewDetail: ReviewDetail;
  isLoading: boolean;
  closeModal: () => void;
}

const ReviewDetailPage: React.FC<Props> = ({
  reviewDetail,
  isLoading,
  closeModal,
}) => {
  if (isLoading) return <Spinner color="primary" height={30} width={30} />;

  return (
    <Modal heading="レビュー詳細" onClose={closeModal}>
      <Container>review detail</Container>
    </Modal>
  );
};

const Container = styled.div``;

export default ReviewDetailPage;
