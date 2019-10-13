import React, { useState, useCallback } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { ReviewPostTemplate } from 'components/templates';
import { storeList, productCategoryList } from 'services/mocks';
import { sleep } from 'utils/timer';

const ReviewPostPage: React.FC = () => {
  const [categoryValue, updateCategoryId] = useState<string>('non-select');
  const [storeValue, updateStoreId] = useState<string>('non-select');
  const [contentValue, udpateContentValue] = useState<string>('');
  const [productNameValue, udpateProductName] = useState<string>('');
  const [pictures, updatePictures] = useState<
    { id: number; picture: string }[]
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
        const imageUrl = createObjectURL(files[0]);
        const id =
          pictures.length === 0 ? 1 : pictures[pictures.length - 1].id + 1;
        updatePictures([...pictures, { id, picture: imageUrl }]);
      }
    },
    [pictures],
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit!!!');
    updateIsLoading(true);
    await sleep(5000);
    updateIsLoading(false);
  };

  const maxPicturesCount = 6;
  const postButtonDisabled = false;

  const reviewPostFormItems = {
    storeList,
    productCategoryList,
    pictures,
    maxPicturesCount,
    postButtonDisabled,
    isLoading,
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

  return <ReviewPostTemplate reviewPostFormItems={reviewPostFormItems} />;
};

export default ReviewPostPage;
