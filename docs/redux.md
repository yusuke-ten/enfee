# redux storeのデータ構造

```js
{
  app: {
    token: '',
    isLoggedIn: false,
    profile: {
      loginName: '',
      displayName: '',
      imageUrl: '',
      userPageUrl: '',
    }
  },
  review: {
    reviewList: {
      isLoading: false,
      data: [],
    },
    reviewDetail: {
      isLoading: false,
      data: [],
      replyLoading: false,
    },
    isModal: false,
  },
  messages: {

  }
}
```
