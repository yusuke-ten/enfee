import React from 'react';
import useFollowButtonWord, { wordTypes } from 'src/hooks/useFollowButtonWord';
import Button from 'components/atoms/Button';

type Size = 'small' | 'midium';

interface NotFollowingButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: Size;
}

const NotFollowingButton: React.FC<NotFollowingButtonProps> = ({
  onClick,
  size = 'midium',
}) => {
  const { word, handlers } = useFollowButtonWord(wordTypes.NOT_FOLLOWING_WORDS);

  return (
    <Button shape="oval" size={size} {...handlers} onClick={onClick} reverse>
      {word}
    </Button>
  );
};

export default NotFollowingButton;
