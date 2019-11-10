import React, { Component, useEffect } from "react";
import { View, Text, FlatList } from 'react-native'
import { BemVindo, Container } from "./styles";
import CenterSpinner from '~/utils/CenterSpinner'


import {gql} from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';
import AsyncStorage from "@react-native-community/async-storage";

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

  // Apollo client status
  const { loading, error, data } = useQuery(FETCH_USERS);

  if(loading){
        return <CenterSpinner/>;
  }
  if (error) {
        return <Text>{error.graphQLErrors[0].message}</Text>;
  }

  return data.getUsers.map(({ email }) => (
    <View>
          <Text>{email}</Text>
    </View>
  ));
}

export default Home;
