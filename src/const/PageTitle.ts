import paths from 'src/paths';
import config from 'src/config';

const { siteName } = config;

export default {
  [paths.login]: () => `ログインページ / ${siteName}`,
  [paths.signup]: () => `サインアップページ / ${siteName}`,
  [paths.reviews]: (store?: string | null) =>
    store ? `${store} / ${siteName}` : siteName,
  [paths.users]: (loginName: string) => `@${loginName}さんのページ / ${siteName}`,
  [paths.reviewPost]: () => `レビューを投稿 / ${siteName}`,
  [paths.settingsProfile]: () => `プロフィール編集 / ${siteName}`,
};
