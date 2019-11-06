# Storeのデータ構造

```js
{
  initializer: {
    localstorgeChecked: false;
    appInitialized: false;
    reviewFormInitialized: false;
  },
  auth: {
    isLoggedIn: false,
    isLoading: false,
    token: '',
    isError: false,
    loginErrorMessage: '',
    signupErroMessage: '',
  },
  app: {
    myProfile: {
      loaded: false,
      errors: {},
      entities: {
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
    }
  },
  review: {
    form: {
      isPosting: false,
      errors: {},
    }
    reviews: {
      loaded: false,
      errors: {},
      entities: [],
    },
    reviewDetail: {
      loaded: false,
      errors: {},
      entities: {},
    },
    comments: {
      loaded: false,
      errors: {},
      entities: [],
    },
    selectedReviewId: 1,
    isModal: false,
  },
  directMessages: {
    ...
  }
}
```
