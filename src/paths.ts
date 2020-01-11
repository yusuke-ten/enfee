const paths = {
  login: '/login',
  signup: '/singup',
  reviewPost: '/reviews/new',
  reviews: '/reviews/:store',
  users: '/users/:loginName',
  settingsProfile: '/settings/profile',
} as const;

export default paths;
