import React from 'react';
import TrendingList from 'components/TrendingList/TrendingList';
import { HomeContainer, TrendingTitle } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeContainer>
      <TrendingTitle>Trending today</TrendingTitle>
      <TrendingList />
    </HomeContainer>
  );
};

export default HomePage;
