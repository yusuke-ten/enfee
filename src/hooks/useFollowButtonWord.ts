import { useState, useCallback } from 'react';

export const wordTypes = {
  FOLLOWING_WORDS: 'FOLLOWING_WORDS',
  NOT_FOLLOWING_WORDS: 'NOT_FOLLOWING_WORDS',
} as const;

const words = {
  [wordTypes.FOLLOWING_WORDS]: {
    enter: 'フォロー解除',
    leave: 'フォロー中',
  },
  [wordTypes.NOT_FOLLOWING_WORDS]: {
    enter: 'フォローする',
    leave: 'フォロー',
  },
};

const useFollowButtonWord = (wordType: keyof typeof wordTypes) => {
  const [word, setWord] = useState(words[wordType].leave);

  const onMouseEnter = useCallback(() => {
    setWord(words[wordType].enter);
  }, []);

  const onMouseLeave = useCallback(() => {
    setWord(words[wordType].leave);
  }, []);

  return { word, handlers: { onMouseEnter, onMouseLeave } };
};

export default useFollowButtonWord;
