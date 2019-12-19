import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReviewPostTemplate } from 'components/templates';
import { RootState } from 'modules/reducer';
import { userProfileInAsideSelector } from 'services/selectors';
import { storeList, productCategoryList } from 'services/mocks';
import { ReviewFormParams } from 'services/models';
import { postReview } from 'modules/review/actions';
import { withInitialize } from 'containers/hocs';

const ReviewPostPage: React.FC = () => {
  const [categoryId, setCategoryId] = useState<number>(0);
  const [storeId, setStoreId] = useState<number>(0);
  const [contentValue, setContentValue] = useState<string>('');
  const [productNameValue, setProductName] = useState<string>('');
  const [pictures, setPictures] = useState<
    { id: number; url: string; file: File }[]
  >([]);
  const [errorMessages, updateErrorMessages] = useState<string[]>([]);

  const handleChangeCategory = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCategoryId(Number(e.target.value));
    },
    [categoryId],
  );

  const handleChangeStore = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setStoreId(Number(e.target.value));
    },
    [storeId],
  );

  const handleChageContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContentValue(e.target.value);
    },
    [contentValue],
  );

  const handleChageProductName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setProductName(e.target.value);
    },
    [productNameValue],
  );

  const { createObjectURL } = window.URL || window.webkitURL;

  const handleChangeFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      if (files && files.length !== 0) {
        const file = files[0];
        const url = createObjectURL(file);
        const id = pictures.length === 0 ? 1 : pictures[pictures.length - 1].id + 1;
        setPictures([...pictures, { id, url, file }]);
      }
    },
    [pictures],
  );

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reviewFormParams: ReviewFormParams = {
      productName: productNameValue,
      content: contentValue,
      pictures,
      price: 200,
      rating: 5,
      storeId,
      productCategoryId: categoryId,
    };
    console.log('form params', reviewFormParams);
    dispatch(postReview.start(reviewFormParams));
  };

  const maxPicturesCount = 6;
  const postButtonDisabled = false;

  const {
    auth: { isLoggedIn },
    app: { myProfile },
    review: {
      form: { isPosting },
    },
  } = useSelector((state: RootState) => state);

  const reviewPostFormItems = {
    storeList,
    productCategoryList,
    pictures,
    maxPicturesCount,
    postButtonDisabled,
    isPosting,
    categoryId,
    storeId,
    productNameValue,
    contentValue,
    errorMessages,
    handleChangeCategory,
    handleChangeStore,
    handleChageContent,
    handleChageProductName,
    handleChangeFile,
    handleSubmit,
  };

  return (
    <ReviewPostTemplate
      reviewPostFormItems={reviewPostFormItems}
      myProfile={userProfileInAsideSelector(myProfile)}
      isLoggedIn={isLoggedIn}
    />
  );
};

export default withInitialize(ReviewPostPage);
