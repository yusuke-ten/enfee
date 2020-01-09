import { useState, useCallback } from 'react';

const words = {
  followingWords: {
    enter: 'フォロー解除',
    leave: 'フォロー中',
  },
  notFollowingWords: {
    enter: 'フォローする',
    leave: 'フォロー',
  },
};

const useFollowButtonWord = (isFollowing: boolean) => {
  const type: keyof typeof words = isFollowing
    ? 'followingWords'
    : 'notFollowingWords';
  const [word, setWord] = useState(words[type].leave);

  const onMouseEnter = useCallback(() => {
    setWord(words[type].enter);
  }, []);

  const onMouseLeave = useCallback(() => {
    setWord(words[type].leave);
  }, []);

  return { word, handlers: { onMouseEnter, onMouseLeave } };
};

export default useFollowButtonWord;
