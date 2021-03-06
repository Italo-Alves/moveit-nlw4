import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';

import { Container } from './styles';

export const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};
