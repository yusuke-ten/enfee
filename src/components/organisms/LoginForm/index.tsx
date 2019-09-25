import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Line, Heading, Spinner } from 'components/atoms';
import { Field, TwitterButton } from 'components/molecules';

export interface Props {
  emailValue: string;
  passwrodValue: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  disabledSubmitButton: boolean;
  isLoading: boolean;
}

const LoadingComponent = () => (
  <span>
    読み込み中
    <Spinner height={20} width={20} />
  </span>
);

const LoginForm: React.FC<Props> = ({
  emailValue,
  passwrodValue,
  onChangeEmail,
  onChangePassword,
  onSubmit,
  disabledSubmitButton,
  isLoading,
}) => {
  return (
    <Container>
      <Heading type="h2" align="center">
        ログイン
      </Heading>
      <Form onSubmit={onSubmit}>
        <Field
          placeholder="メールアドレス"
          value={emailValue}
          onChangeHandler={onChangeEmail}
        />
        <Field
          type="password"
          placeholder="パスワード"
          value={passwrodValue}
          onChangeHandler={onChangePassword}
        />
        <ButtonWrapper>
          <Button type="submit" disabled={disabledSubmitButton || isLoading}>
            {isLoading ? <LoadingComponent /> : 'ログインする'}
          </Button>
        </ButtonWrapper>
        <Line text="または" />
        <ButtonWrapper>
          <Link to="/twitter.com">
            <TwitterButton text="twitterアカウントでログイン" />
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
  width: 310px;
  display: inline-block;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  margin: 20px auto;
`;

export default LoginForm;
