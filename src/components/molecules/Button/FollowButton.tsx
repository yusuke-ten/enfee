import React from 'react';
import useFollowButtonWord from 'src/hooks/useFollowButtonWord';
import Button from 'components/atoms/Button';

type Size = 'small' | 'midium';

interface FollowButtonProps {
  isFollowing: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: Size;
}

const FollowButtonContainer: React.FC<FollowButtonProps> = ({
  isFollowing,
  onClick,
  size = 'midium',
}) => {
  const props = useFollowButtonWord(isFollowing);
  const passProps = { ...props, isFollowing, onClick, size };

  return <FollowButtonPresenter {...passProps} />;
};

interface FollowButtonPresenterProps {
  isFollowing: boolean;
  handlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
  word: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size: Size;
}

const FollowButtonPresenter: React.FC<FollowButtonPresenterProps> = ({
  isFollowing,
  handlers,
  word,
  onClick,
  size,
}) => {
  return (
    <Button
      shape="oval"
      size={size}
      reverse={!isFollowing}
      {...handlers}
      onClick={onClick}
    >
      {word}
    </Button>
  );
};

export default FollowButtonContainer;
