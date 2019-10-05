import React from 'react';
import styled from 'styled-components';
import { Heading, Select, TextInput, Line } from 'components/atoms';
import {
  TextAreaField,
  InputPictureField,
  PostButtonWithLoading,
} from 'components/molecules';
import { StoreItem, ProductCategoryItem } from 'services/models';

export interface Props {
  reviewPostFormItems: {
    storeList: StoreItem[];
    productCategoryList: ProductCategoryItem[];
    pictures: string[];
    maxPicturesCount: number;
    postButtonDisabled: boolean;
    isLoading: boolean;
    categoryValue: string;
    storeValue: string;
    productNameValue: string;
    contentValue: string;
    handleChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleChangeStore: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleChageContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleChageProductName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
  };
}

const ReviewPostForm: React.FC<Props> = ({ reviewPostFormItems, ...props }) => {
  const {
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
    handleChangeCategory,
    handleChangeStore,
    handleChageContent,
    handleChageProductName,
    handleChangeFile,
    handleSubmit,
  } = reviewPostFormItems;

  return (
    <form onSubmit={handleSubmit} {...props}>
      <StyledHeading type="h3" color="base" align="center">
        レビュー投稿
      </StyledHeading>
      <Line />
      <SelectArea>
        <FieldMargin>
          <Select
            title="カテゴリー"
            name="product_category_id"
            items={productCategoryList}
            value={categoryValue}
            handleChage={handleChangeCategory}
          />
        </FieldMargin>
        <FieldMargin>
          <Select
            title="ストア"
            name="store_id"
            items={storeList}
            value={storeValue}
            handleChage={handleChangeStore}
          />
        </FieldMargin>
        <FieldMargin></FieldMargin>
      </SelectArea>
      <FieldMargin>
        <StyledTextInput
          value={productNameValue}
          onChangeHandler={handleChageProductName}
          placeholder="商品名を入力してください"
        />
      </FieldMargin>
      <TextAreaWrapper>
        <TextAreaField
          value={contentValue}
          handleChage={handleChageContent}
          valueMaxLength={500}
          placeholder="レビュー本文を入力してください"
        />
      </TextAreaWrapper>
      <FieldMargin></FieldMargin>
      <Line />
      <FieldMargin>
        <InputPictureField
          pictures={pictures}
          handleChangeFile={handleChangeFile}
          maxPicturesCount={maxPicturesCount}
        />
      </FieldMargin>
      <ButtonArea>
        <PostButtonWithLoading
          text="投稿する"
          lodaingText="投稿中"
          isLoading={isLoading}
          disabled={postButtonDisabled}
        />
      </ButtonArea>
    </form>
  );
};

const StyledHeading = styled(Heading)`
  margin: 20px;
`;
const FieldMargin = styled.div`
  margin-top: 18px;
`;
const StyledTextInput = styled(TextInput)`
  padding: 0.9rem;
`;
const SelectArea = styled.div`
  width: 50%;
`;
const TextAreaWrapper = styled.div`
  margin: 18px 0;
  height: 290px;
`;
const ButtonArea = styled.div`
  padding: 20px 0;
  text-align: center;
`;

export default ReviewPostForm;
