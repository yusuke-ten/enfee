import React from 'react';
import useFollowButtonWord, { wordTypes } from 'src/hooks/useFollowButtonWord';
import Button from 'components/atoms/Button';

type Size = 'small' | 'midium';

interface FollowingButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: Size;
}

const FollowingButton: React.FC<FollowingButtonProps> = ({
  onClick,
  size = 'midium',
}) => {
  const { word, handlers } = useFollowButtonWord(wordTypes.FOLLOWING_WORDS);

  return (
    <Button shape="oval" size={size} {...handlers} onClick={onClick}>
      {word}
    </Button>
  );
};

export default FollowingButton;
