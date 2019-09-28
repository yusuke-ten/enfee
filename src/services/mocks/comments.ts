export const comments = [
  {
    id: 1,
    comment: 'レビュー1へのコメントです！',
    likeCount: 0,
    createdAt: '2019-09-22',
    replyCount: 0,
    liked: false,
    user: {
      id: 6,
      displayName: 'あおひろ',
      loginName: '@aohiro01',
      imageUrl:
        'https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg',
    },
    replies: [],
  },
  {
    id: 2,
    comment: 'version2: レビュー1へのコメントです！',
    likeCount: 5,
    createdAt: '2019-09-22',
    replyCount: 3,
    liked: true,
    user: {
      id: 6,
      displayName: 'あおひろ',
      loginName: '@aohiro01',
      imageUrl:
        'https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg',
    },
    replies: [],
  },
];
