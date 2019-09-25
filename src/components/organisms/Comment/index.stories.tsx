import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { Comment as IComment } from 'services/models/reviewDetail';
import Comment from '.';
import ReplyComment from './ReplyComment';

const replyCommentData: IComment = {
  id: 1,
  comment: 'レビュー1へのコメントです！',
  likeCount: 3,
  createdAt: '2019-09-22',
  replyCount: 4,
  liked: false,
  user: {
    id: 6,
    displayName: 'あおひろ',
    loginName: '@aohiro01',
    imageUrl:
      'https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg',
  },
};

const commentData: IComment & { replies: IComment[] } = {
  id: 1,
  comment: 'レビュー1へのコメントです！',
  likeCount: 3,
  createdAt: '2019-09-22',
  replyCount: 4,
  liked: false,
  user: {
    id: 6,
    displayName: 'あおひろ',
    loginName: '@aohiro01',
    imageUrl:
      'https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg',
  },
  replies: [replyCommentData],
};

storiesOf('organisms/Comment', module)
  .add('default', () => (
    <Wrapper>
      <Comment
        comment={commentData}
        onOpenReply={() => {}}
        showReplies={boolean('showReplies', true)}
        toggleShowReplies={() => {}}
        onReplySubmit={() => {}}
        isReplyLoading={boolean('isReplyLoading', false)}
      />
    </Wrapper>
  ))
  .add('replyComment', () => (
    <Wrapper>
      <ReplyComment comment={replyCommentData} />
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 600px;
`;
