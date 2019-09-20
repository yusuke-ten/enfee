import React from 'react';
import styled from 'styled-components';
import { AvatarCircle, Usernames, StatsCell } from 'components/atoms';

export interface Stats {
  heading: 'レビュー' | 'フォロー' | 'フォロワー';
  amount: number;
}

interface Props {
  imageUrl: string;
  displayName: string;
  loginName: string;
  statsList: Stats[];
}

const UserInfoCard: React.FC<Props> = ({
  imageUrl,
  displayName,
  loginName,
  statsList,
}) => (
  <Container>
    <AvatarWrapper>
      <AvatarCircle src={imageUrl} />
    </AvatarWrapper>
    <Usernames displayName={displayName} loginName={loginName} align="center" />
    <StatsWrapper>
      {statsList.map(stats => (
        <StatsCell heading={stats.heading} amount={stats.amount} />
      ))}
    </StatsWrapper>
  </Container>
);

const Container = styled.div`
  display: inline-block;
  background-color: #ffffff;
  padding: 20px 14px;
`;
const AvatarWrapper = styled.div`
  margin: 0 auto;
  height: 80px;
  width: 80px;
  padding-bottom: 1rem;
`;
const StatsWrapper = styled.div`
  padding-top: 10px;
`;

export default UserInfoCard;
