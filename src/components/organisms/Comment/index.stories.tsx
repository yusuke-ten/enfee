import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Comment as IComment } from 'services/models/reviewDetail';
import Comment from '.';

const commentData: IComment = {
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

storiesOf('organisms/Comment', module).add('default', () => (
  <Comment comment={commentData} onOpenReply={() => {}} />
));
