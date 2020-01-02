import React from 'react';
import SmallSelect, { SmallSelectProps } from 'components/atoms/Select/SmallSelect';
import FilterMenu, { FilterMenuProps } from 'components/molecules/Menu/FilterMenu';

export type FilterReviewProps = Omit<SmallSelectProps, 'title'> &
  Pick<FilterMenuProps, 'menuItems' | 'handleClick'>;

const FilterReview: React.FC<FilterReviewProps> = ({
  selectItems,
  selectProps,
  menuItems,
  handleClick,
  ...props
}) => {
  return (
    <FilterMenu
      small
      rightContent={
        <SmallSelect
          title="カテゴリーで絞り込み"
          selectItems={selectItems}
          selectProps={selectProps}
        />
      }
      menuItems={menuItems}
      handleClick={handleClick}
      {...props}
    />
  );
};

export default FilterReview;
