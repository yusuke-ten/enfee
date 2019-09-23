import React from 'react';
import styled from 'styled-components';
import { TextInput, AvatarCircle, Button } from 'components/atoms';
import { Size } from 'src/const';

interface Props {
  imageUrl: string;
  value: string;
  onChange: () => void;
  reply?: boolean;
}

const CommentInputField: React.FC<Props> = ({
  imageUrl,
  value,
  onChange,
  reply = false,
}) => {
  const buttonText = reply ? '返信する' : 'コメントする';
  const placeholderText = reply ? '返信を入力' : 'コメントを入力';

  return (
    <Container>
      <AvatarWrapper small={reply}>
        <AvatarCircle src={imageUrl} />
      </AvatarWrapper>
      <Content>
        <TextInput
          value={value}
          placeholder={placeholderText}
          onChangeHandler={onChange}
          small={reply}
        />
        <ButtonArea>
          <StyledButton
            type="submit"
            disabled={value.length === 0}
            small={reply}
          >
            {buttonText}
          </StyledButton>
        </ButtonArea>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const AvatarWrapper = styled.div<{ small: boolean }>`
  height: ${props => (props.small ? '38px' : '50px')};
  width: ${props => (props.small ? '38px' : '50px')};
`;
const Content = styled.div`
  flex: 1;
  padding-left: 10px;
`;
const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
`;
const StyledButton = styled(Button)<{ small: boolean }>`
  height: ${props => (props.small ? '25px' : '30px')};
  font-size: ${props => (props.small ? Size.FONT.XSMALL : Size.FONT.SMALL)}px;
  padding: 0 10px;
`;

export default CommentInputField;
