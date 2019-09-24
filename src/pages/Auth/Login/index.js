import React, { Component } from "react";
import { Container, Form, InputText, ImageLogo } from "./styles";
import assets from '~/services/imagesImport';
import { Platform } from 'react-native'
import { colors } from "~/styles";


export default class Login extends Component {

  static navigationOptions = { header: null };

  state = {
    email: '',
    password: ''
  }

  render() {

    const { email, password } = this.state;
    return (
      <Container behavior={Platform.select({
        ios: 'padding',
        android: null,
      })}>
        <ImageLogo source={assets.newLogo} />
        <Form>
          <InputText
            placeholder="E-mail"
            value={email}
            onChangeText={email => this.setState({ email })}
            onEndEditing={() => this.passwordInput.focus()}
            returnKeyType='next'
            placeholderTextColor={colors.whiteTransparent}
          />

          <InputText
            ref={(input) => this.passwordInput = input}
            placeholder="Senha"
            value={password}
            onChangeText={password => this.setState({ password })}
            returnKeyType='send'
            onSubmitEditing={() => alert('executa função de login')}
            placeholderTextColor={colors.whiteTransparent}
          />
        </Form>
      </Container>
    );
  }
}
