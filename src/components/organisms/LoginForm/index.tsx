import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Line, Heading } from 'components/atoms';
import { Field } from 'components/molecules';

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
      <Heading type="h2" align="center">
        ログイン
      </Heading>
      <Form>
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
  width: 310px;
  display: inline-block;
`;
const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  margin: 20px auto;
`;

export default LoginForm;
