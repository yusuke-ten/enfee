import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { boolean, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
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
        comment={object('comment', commentData)}
        replyValue={text('replyValue', '')}
        isDisplayReplies={boolean('isDisplayReplies', true)}
        isDisplayReplyForm={boolean('isDisplayReplyForm', false)}
        isReplyLoading={boolean('isReplyLoading', false)}
        handleOpenReplies={action('handleOpenReplies')}
        handleHiddenReplies={action('handleHiddenReplies')}
        handleReplySubmit={action('handleReplySubmit')}
        handleChangeReplyValue={action('handleChangeReplyValue')}
        handleToggleDisplayReplayForm={action('handleToggleDisplayReplayForm')}
        handleLike={action('handleLike')}
      />
    </Wrapper>
  ))
  .add('replyComment', () => (
    <Wrapper>
      <ReplyComment
        comment={replyCommentData}
        handleLike={action('handleLike')}
      />
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 600px;
`;
