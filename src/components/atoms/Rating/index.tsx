import React from 'react';
import Rate05 from './svg/rate0.5.svg';
import Rate10 from './svg/rate1.0.svg';
import Rate15 from './svg/rate1.5.svg';
import Rate20 from './svg/rate2.0.svg';
import Rate25 from './svg/rate2.5.svg';
import Rate30 from './svg/rate3.0.svg';
import Rate35 from './svg/rate3.5.svg';
import Rate40 from './svg/rate4.0.svg';
import Rate45 from './svg/rate4.5.svg';
import Rate50 from './svg/rate5.0.svg';

type Rating =
  | '0.5'
  | '1.0'
  | '1.5'
  | '2.0'
  | '2.5'
  | '3.0'
  | '3.5'
  | '4.0'
  | '4.5'
  | '5.0';

interface Props {
  rating: Rating;
  height: number;
}

const mappedSvg: { [k in Rating]: any } = {
  '0.5': Rate05,
  '1.0': Rate10,
  '1.5': Rate15,
  '2.0': Rate20,
  '2.5': Rate25,
  '3.0': Rate30,
  '3.5': Rate35,
  '4.0': Rate40,
  '4.5': Rate45,
  '5.0': Rate50,
};

const Rating: React.FC<Props> = ({ rating, height }) => {
  const RatingComponent = mappedSvg[rating];

  return <RatingComponent height={height} />;
};

export default Rating;
