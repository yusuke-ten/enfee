import React from 'react';
import styled from 'styled-components';
import { Txt, CommentDotsIcon } from 'components/atoms';
import { CommentInputField } from 'components/molecules';
import { CommentContainer } from 'containers/organisms';
import { Comment, UserProfile } from 'services/models';

export interface CommentAreaProps {
  comments: Comment[];
  commentValue: string;
  commentChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitCommentHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  reviewId: number;
  isLoggedIn: boolean;
  myProfile: UserProfile | null;
  isPosting: boolean;
}

const CommentArea: React.FC<CommentAreaProps> = ({
  comments,
  commentValue,
  commentChangeHandler,
  submitCommentHandler,
  reviewId,
  isLoggedIn,
  myProfile,
  isPosting,
}) => {
  const myImageUrl = myProfile ? myProfile.imageUrl : '';

  return (
    <>
      <Title>
        <StyledTxt tag="span" size="xl">
          {comments.length}件のコメント
        </StyledTxt>
        <CommentDotsIcon width={18} height={18} color="black" />
      </Title>
      {isLoggedIn && (
        <form onSubmit={submitCommentHandler}>
          <CommentInputField
            imageUrl={myImageUrl}
            value={commentValue}
            onChange={commentChangeHandler}
            isPosting={isPosting}
          />
        </form>
      )}
      <div>
        {comments.map((comment, idx) => (
          <CommentWrapper key={idx}>
            <CommentContainer comment={comment} reviewId={reviewId} />
          </CommentWrapper>
        ))}
      </div>
    </>
  );
};

const CommentWrapper = styled.div`
  padding-top: 14px;
`;
const Title = styled.div`
  margin: 12px 0;
  display: flex;
  align-items: center;
`;
const StyledTxt = styled(Txt)`
  padding-right: 5px;
  letter-spacing: 1.3px;
`;

export default CommentArea;
