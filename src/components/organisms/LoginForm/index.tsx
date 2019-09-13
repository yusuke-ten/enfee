import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import { Button, Input, Line } from 'components/atoms';

const { TextInput } = Input;

export interface Props {
  emailValue: string;
  passwrodValue: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const LoginForm: React.FC<Props> = ({
  emailValue,
  passwrodValue,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) => {
  return (
    <Container>
      <Heading type="h2">ログイン</Heading>
      <Form>
        <TextInput
          placeholder="メールアドレス"
          value={emailValue}
          onChangeHandler={onChangeEmail}
        />
        <TextInput
          placeholder="パスワード"
          value={passwrodValue}
          onChangeHandler={onChangePassword}
        />
        <ButtonWrapper>
          <Button onClick={onSubmit}>ログインする</Button>
        </ButtonWrapper>
        <Line text="または" />
        <ButtonWrapper>
          <Link to="/twitter.com">
            <Button color="twitter">Twitterアカウントでログインする</Button>
          </Link>
        </ButtonWrapper>
        <Line />
        <ButtonWrapper>
          <Link to="/signup">
            <Button color="secondary">新規アカウント作成</Button>
          </Link>
        </ButtonWrapper>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  margin: 20px auto;
`;

export default LoginForm;
