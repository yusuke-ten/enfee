type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;
type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : never;
};

export type CreatorsToActions<T> = Unbox<ReturnTypes<T>>;

export type StoreType = 'sevenEleven' | 'familyMart' | 'lawson';
export type StoreTextType = 'セブン-イレブン' | 'ファミリーマート' | 'ローソン';

const mappedStore: { [k in StoreType]: StoreTextType } = {
  sevenEleven: 'セブン-イレブン',
  familyMart: 'ファミリーマート',
  lawson: 'ローソン',
};

export const toStoreName = (store: StoreType): StoreTextType => {
  return mappedStore[store];
};
