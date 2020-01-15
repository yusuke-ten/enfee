import { FilteringLink } from 'components/molecules/Menu/ReviewMenu';

export const storeFilteringLinks: FilteringLink[] = [
  { text: 'すべて', to: '/reviews' },
  { text: 'セブン−イレブン', to: '/reviews?store=seven' },
  { text: 'ファミリーマート', to: '/reviews?store=family' },
  { text: 'ローソン', to: '/reviews?store=lawson' },
];

export const followerFilteringTabs: string[] = ['全体', 'フォロー中'];
