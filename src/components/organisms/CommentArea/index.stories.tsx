import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { store } from 'src/index';
import { comments } from 'services/mocks/comments';
import { profile } from 'services/mocks/myProfile';
import CommentArea from '.';

storiesOf('organisms/CommentArea', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => (
    <Wrapper>
      <CommentArea
        comments={comments}
        reviewId={number('reviewId', 1)}
        commentValue={text('commentValue', '')}
        commentChangeHandler={action('commentChangeHandler')}
        submitCommentHandler={action('submitCommentHandler')}
        isLoggedIn
        myProfile={profile}
        isPosting={false}
      />
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 700px;
`;
