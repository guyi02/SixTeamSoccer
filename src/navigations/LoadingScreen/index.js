import React, { Component,useState, useEffect } from "react";
import assets from "~/services/imagesImport";

import { Container, Logo, Texto, Indicador } from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import LottieView from 'lottie-react-native';

const LoadingScreen = ({navigation}) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getUserInfo();
    }, 4000);
  })

  getUserInfo = async () => {
    setLoading(false);
    let tokenResponse = await AsyncStorage.getItem("@user:token");
    const token = JSON.parse(tokenResponse); 
    if(token){
      setLoading(true);
      navigation.navigate("PlayerStack");
    }else{
      setLoading(true);
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
