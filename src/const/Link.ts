import { FilteringLink } from 'components/molecules/Menu/ReviewMenu';

export const storeFilteringLinks: FilteringLink[] = [
  { text: 'すべて', to: '/reviews' },
  { text: 'セブン−イレブン', to: '/reviews/seven' },
  { text: 'ファミリーマート', to: '/reviews/family' },
  { text: 'ローソン', to: '/reviews/lawson' },
];

export const followerFilteringTabs: string[] = ['全体', 'フォロー中'];
