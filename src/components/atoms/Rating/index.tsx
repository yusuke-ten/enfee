import React from 'react';
import { Rating } from 'services/models';
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

interface Props {
  rating: Rating;
  height: number;
}

const mappedSvg: { [k in Rating]: any } = {
  1: Rate05,
  2: Rate10,
  3: Rate15,
  4: Rate20,
  5: Rate25,
  6: Rate30,
  7: Rate35,
  8: Rate40,
  9: Rate45,
  10: Rate50,
};

const Rating: React.FC<Props> = ({ rating, height }) => {
  const RatingComponent = mappedSvg[rating];

  return <RatingComponent height={height} />;
};

export default Rating;
