import React from 'react';

import { StatusBar, SafeAreaView } from 'react-native';
import {
  Container,
  HeaderArea,
  IconButton,
  IconLeft,
  IconRight,
} from './styles';

const data = [
  {
    id: 1,
    name: 'Cristiano',
    surname: 'Ronaldo',
    img: assets.player,
  },
  // {
  //     id: 4,
  //     texto: "teste4"
  // },
  // {
  //     id: 5,
  //     texto: "teste5"
  // },
  // {
  //     id: 6,
  //     texto: "teste6"
  // },
];

import assets from '~/services/imagesImport';
import AsyncStorage from '@react-native-community/async-storage';
function Player({ navigation }) {
  // const { loading, error, data } = useQuery(FETCH_USERS);

  // if(loading){
  //       return <CenterSpinner/>;
  // }
  // if (error) {
  //       return <Text style={{marginTop: 20}}>{error.graphQLErrors[0].message}</Text>;
  // }

  return (
    <Container>
      <HeaderArea>
        <IconButton>
          <IconLeft />
        </IconButton>

        <IconButton>
          <IconRight />
        </IconButton>
      </HeaderArea>
    </Container>
  );
}

export default Player;
