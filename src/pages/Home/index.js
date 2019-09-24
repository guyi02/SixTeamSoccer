import React, { Component } from "react";
import { View, Text, FlatList } from 'react-native'
import { BemVindo, Container } from "./styles";
import CenterSpinner from '~/Util/CenterSpinner'


import {gql} from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';

const FETCH_USERS = gql`
   query{
      getUsers{
        id
        email
        is_team
      }
   }
`

function Home(){
  const { loading, error, data } = useQuery(FETCH_USERS);

  if(loading){
        return <CenterSpinner/>;
  }
  if (error) {
        return <Text>{error}</Text>;
  }

  return data.getUsers.map(({ email }) => (
    <View>
          <Text>{email}</Text>
    </View>
  ));
}

export default Home;
