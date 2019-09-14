import React from 'react';
import styled from 'styled-components';
import { Heading } from 'components/atoms';
import { Feature } from 'components/molecules';
import { Color, Size } from 'src/const';

const EntranceInfo = () => (
  <>
    <HeadingWrapper>
      <Heading type="h1" color="less">
        コンビニ商品のレビューを
        <br />
        共有しよう！
      </Heading>
    </HeadingWrapper>
    <WrapperFeature>
      <Feature icon="yummy" text="こんな美味しい商品があるよっ" />
    </WrapperFeature>
    <WrapperFeature>
      <Feature icon="treasure" text="最近おすすめのスイーツはこれ！" />
    </WrapperFeature>
    <Text>日々の買い物がより楽しくなる</Text>
  </>
);

const HeadingWrapper = styled.div`
  margin-bottom: 28px;
`;
const WrapperFeature = styled.div`
  padding: 5px 0;
`;
const Text = styled.div`
  font-size: ${Size.FONT.LARGE}px;
  color: ${Color.FONT.LESS};
  padding-top: 20px;
`;

export default EntranceInfo;
