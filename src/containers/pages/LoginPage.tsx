import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from 'src/modules';
import Layout from 'components/Layout';
import { LoginFormContainer } from 'containers/organisms';
import { EntranceInfo } from 'components/organisms';
import { EntranceTemplate } from 'components/templates';
import { setToken } from 'utils/localStorage';
import config from 'src/config';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

// login処理が終わったらローカルストレージにtokenを一度保存して、location.hrefでメインページに遷移させている。
// メインページにて、initailize処理にそのtokenを使用する。
// この処理はtwitter, ID/PASS login 両方とも共通になっている。
// 二度手間かもしれないが、initialize処理の流れが割とシンプルになるのでこうしている。(この辺りの処理はまだまだ模索中)
const LoginPageContainer: React.FC = () => {
  // twitterログインの場合: query parameterでtokenが渡されるためlocalstorageに保存してメインページに遷移
  const query = useQuery();
  const token = query.get('token');
  if (token) {
    setToken(token);
    window.location.href = config.baseUrl;
  }

  // 通常ログインの場合: isLoggedInがtrueになるので、メインページにリダイレクト
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  if (isLoggedIn) {
    window.location.href = config.baseUrl;
  }

  return (
    <Layout title="login page">
      <EntranceTemplate InfoComponent={<EntranceInfo />}>
        <LoginFormContainer />
      </EntranceTemplate>
    </Layout>
  );
};

export default LoginPageContainer;
