import React, { Component } from "react";
import assets from "~/services/imagesImport";

import { Container, Logo, Texto, Indicador } from "./styles";

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
      this.props.navigation.navigate("AuthStack");
    }, 5000);
  }
  render() {
    return (
      <Container>
        <Logo source={assets.newLogo} resizeMode="center" />
        <Texto>Carregando SplashScreen</Texto>
        {this.state.loading ? (
          < Indicador />
        ) : null}
      </Container>
    );
  }
}
