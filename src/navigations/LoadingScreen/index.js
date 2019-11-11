import React, { Component,useState, useEffect } from "react";
import assets from "~/services/imagesImport";

import { Container, Logo, Texto, Indicador } from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import LottieView from 'lottie-react-native';

import {gql} from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';

const REFREH_TOKEN = gql`
  query{
  refreshToken{
    token
    logged
  }
}
`;


const LoadingScreen = ({navigation}) => {
  // Apollo client status
  const { data } = useQuery(REFREH_TOKEN);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getUserInfo();
    }, 4000);
  })

  getUserInfo = () => {        
    if(data){
      navigation.navigate("PlayerStack");
    }else{
      navigation.navigate("AuthStack");
    }
  }
  
  return (
    <Container>
     <LottieView source={assets.shirtLottie} autoPlay loop />
     <Indicador/>
     <Texto>Carregando...</Texto>
    </Container>
  );
  
}

export default LoadingScreen;
