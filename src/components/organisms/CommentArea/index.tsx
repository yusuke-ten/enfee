import React from 'react';
import styled from 'styled-components';
import { Txt, CommentDotsIcon } from 'components/atoms';
import { CommentInputField } from 'components/molecules';
import { CommentContainer } from 'containers/organisms';
import { Comment } from 'services/models';

interface Props {
  comments: (Comment & { replies: Comment[] })[];
  commentValue: string;
  commentChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitCommentHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CommentArea: React.FC<Props> = ({
  comments,
  commentValue,
  commentChangeHandler,
  submitCommentHandler,
}) => {
  return (
    <>
      <Title>
        <StyledTxt tag="span" size="xl">
          {comments.length}件のコメント
        </StyledTxt>
        <CommentDotsIcon width={18} height={18} color="black" />
      </Title>
      <form onSubmit={submitCommentHandler}>
        <CommentInputField
          imageUrl=""
          value={commentValue}
          onChange={commentChangeHandler}
        />
      </form>
      <div>
        {comments.map((comment, idx) => (
          <CommentWrapper key={idx}>
            <CommentContainer comment={comment} />
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
