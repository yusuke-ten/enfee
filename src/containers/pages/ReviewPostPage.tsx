import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReviewPostTemplate } from 'components/templates';
import { RootState } from 'modules/index';
import { userProfileInAsideSelector } from 'services/selectors';
import { storeList, productCategoryList } from 'services/mocks';
import { ReviewFormParams } from 'services/models';
import { postReview } from 'modules/review/actions';
import useInitialize from 'src/hooks/useInitialize';

const ReviewPostPage: React.FC = () => {
  useInitialize();

  const [categoryValue, updateCategoryId] = useState<string>('non-select');
  const [storeValue, updateStoreId] = useState<string>('non-select');
  const [contentValue, udpateContentValue] = useState<string>('');
  const [productNameValue, udpateProductName] = useState<string>('');
  const [pictures, updatePictures] = useState<
    { id: number; url: string; file: File }[]
  >([]);
  const [isLoading, updateIsLoading] = useState<boolean>(false);
  const [errorMessages, updateErrorMessages] = useState<string[]>([]);

  const handleChangeCategory = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      updateCategoryId(e.target.value);
    },
    [categoryValue],
  );

  const handleChangeStore = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      updateStoreId(e.target.value);
    },
    [storeValue],
  );

  const handleChageContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      udpateContentValue(e.target.value);
    },
    [contentValue],
  );

  const handleChageProductName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      udpateProductName(e.target.value);
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
        const id =
          pictures.length === 0 ? 1 : pictures[pictures.length - 1].id + 1;
        updatePictures([...pictures, { id, url, file }]);
      }
    },
    [pictures],
  );

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit!!!');
    const reviewFormParams: ReviewFormParams = {
      productName: productNameValue,
      content: contentValue,
      pictures,
      price: 200,
      rating: 5,
      storeId: 1,
      productCategoryId: 1,
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
    categoryValue,
    storeValue,
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

export default ReviewPostPage;
