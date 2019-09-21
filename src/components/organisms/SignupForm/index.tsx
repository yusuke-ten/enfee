import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Heading, Button, Line } from 'components/atoms';
import { Field } from 'components/molecules';
import { Color, Size } from 'src/const';

export interface Props {
  emailValue: string;
  passwordValue: string;
  passwordConfirmationValue: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordConfirmation: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onSubmit: () => void;
  disabledSubmitButton: boolean;
}

const SignupForm: React.FC<Props> = ({
  emailValue,
  passwordValue,
  passwordConfirmationValue,
  onChangeEmail,
  onChangePassword,
  onChangePasswordConfirmation,
  onSubmit,
  disabledSubmitButton,
}) => {
  return (
    <Container>
      <Heading type="h2" align="center">
        新規アカウント登録
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
          value={passwordValue}
          onChangeHandler={onChangePassword}
        />
        <Field
          type="password"
          placeholder="パスワード確認"
          value={passwordConfirmationValue}
          onChangeHandler={onChangePasswordConfirmation}
        />
      </Form>
      <MarginWrapper>
        <Button type="submit" disabled={disabledSubmitButton}>
          ログインする
        </Button>
      </MarginWrapper>
      <Line />
      <MarginWrapper>
        <StyledLink to="/login">アカウントお持ちの場合はログイン</StyledLink>
      </MarginWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 310px;
  display: inline-block;
`;
const Form = styled.form`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MarginWrapper = styled.div`
  margin: 20px auto;
  text-align: center;
`;
const StyledLink = styled(Link)`
  font-size: ${Size.FONT_RATIO.SMALL}rem;
  color: ${Color.THEME.PRIMARY};

  &:hover {
    color: ${Color.THEME.PRIMARY_DARK};
    text-decoration: underline;
  }
`;

export default SignupForm;
