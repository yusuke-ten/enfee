# Storeのデータ構造

```js
{
  auth: {
    isLoggedIn: false,
    token: '',
    loginErrorMessage: '',
    signupErroMessage: '',
  },
  app: {
    initialized: false, // ここでプロフィール情報を取得するか判断
    profile: {
      id: 1,
      displayName: '',
      loginName: '',
      imageUrl: '',
      followerCount: 0,
      followingCount: 0,
      reviewCount: 1,
      loveStore: {
        id: 1,
        name: 'セブン-イレブン'
      }
    }
  },
  review: {
    form: {
      isPosting: false,
    }
    reviews: {
      isLoading: false,
      data: [],
    },
    reviewDetail: {
      isLoading: false,
      data: [],
      replyLoading: false,
    },
    reviewComments: {
      isLoading: false,
      data: [],
    },
    selectedReviewId: 1,
    isModal: false,
  },
  directMessages: {
    ...
  }
}
```
