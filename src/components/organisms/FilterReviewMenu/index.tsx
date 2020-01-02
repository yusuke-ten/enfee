import React from 'react';
import SmallSelect, { SmallSelectProps } from 'components/atoms/Select/SmallSelect';
import FilterMenu, { FilterMenuProps } from 'components/molecules/Menu/FilterMenu';

export type FilterReviewProps = Omit<SmallSelectProps, 'title'> & {
  menuProps: Pick<FilterMenuProps, 'menus' | 'handleSelect' | 'selected'>;
};

const FilterReview: React.FC<FilterReviewProps> = ({
  selectItems,
  selectProps,
  menuProps,
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
      {...menuProps}
      {...props}
    />
  );
};

export default FilterReview;
