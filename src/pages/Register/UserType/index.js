import React, { Component, useState, useEffect } from 'react';
import { Text, Animated, TouchableWithoutFeedback } from 'react-native';

import {
  Container,
  AreaSelected,
  ButtonConfirm,
  TextBtnConfirm,
} from './styles';

const UserType = ({ navigation }) => {
  const [animPlayerCard] = useState(new Animated.Value(1));
  const [animTeamCard] = useState(new Animated.Value(1));
  const [choise, setChoise] = useState('');

  useEffect(() => {
    playerCardAnim();
  }, []);
  // Functions to animated
  playerCardAnim = () => {
    setChoise('player');
    Animated.parallel([
      Animated.timing(animPlayerCard, {
        toValue: 1.7,
        duration: 500,
      }),
      Animated.timing(animTeamCard, {
        toValue: 1,
        duration: 400,
      }),
    ]).start();
  };

  teamCardAnim = () => {
    setChoise('team');
    Animated.parallel([
      Animated.timing(animTeamCard, {
        toValue: 1.7,
        duration: 500,
      }),
      Animated.timing(animPlayerCard, {
        toValue: 1,
        duration: 400,
      }),
    ]).start();
  };

  // Styles Animated
  const scalePlayerStyle = {
    transform: [
      {
        scale: animPlayerCard,
      },
    ],
  };

  const scaleTeamStyle = {
    transform: [
      {
        scale: animTeamCard,
      },
    ],
  };

  redirect = () => {
    if (choise === 'team') {
      navigation.push('RegisterTeam');
    } else {
      navigation.push('RegisterPlayer');
    }
  };

  return (
    <Container>
      <AreaSelected>
        <TouchableWithoutFeedback onPress={playerCardAnim}>
          <Animated.View
            style={[
              {
                height: 80,
                width: 80,
                borderWidth: 1,
                borderColor: 'blue',
              },
              scalePlayerStyle,
            ]}
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={teamCardAnim}>
          <Animated.View
            style={[
              {
                height: 80,
                width: 80,
                borderWidth: 1,
                borderColor: 'blue',
              },
              scaleTeamStyle,
            ]}
          />
        </TouchableWithoutFeedback>
      </AreaSelected>

      <ButtonConfirm onPress={redirect}>
        <TextBtnConfirm>Confirmar</TextBtnConfirm>
      </ButtonConfirm>
    </Container>
  );
};

export default UserType;
