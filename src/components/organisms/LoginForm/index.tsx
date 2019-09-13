import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import { Button, Input, Line } from 'components/atoms';

const { TextInput } = Input;

interface Props {
  onSubmitHandler: () => {};
}

const LoginForm: React.FC<Props> = ({ onSubmitHandler = () => {} }) => {
  return (
    <Container>
      <Heading type="h2">ログイン</Heading>
      <Form>
        <TextInput
          placeholder="メールアドレス"
          value=""
          onChangeHandler={() => {}}
        />
        <TextInput
          placeholder="パスワード"
          value=""
          onChangeHandler={() => {}}
        />
        <ButtonWrapper>
          <Button onClick={onSubmitHandler}>ログインする</Button>
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
