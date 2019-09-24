import React, { Component } from 'react';
import { YellowBox } from 'react-native';

import '~/config/ReactotronConfig';
import AsyncStorage from '@react-native-community/async-storage';

// Desabilita aviso (warning) de proptypes com tipagem divergente
YellowBox.ignoreWarnings(['Warning: Each', 'Warning: Failed prop type']);
console.disableYellowBox = true;

//  GRAPHQL
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:4000/'}),
  cache: new InMemoryCache()
});

// Serviço que adiciona funções de roteamento para redux/redux sagas
import { setNavigator } from '~/services/navigationService';

import Routes from '~/routes';


export default class App extends Component {

  static navigationOptions = { header: null };

  render() {
    return (
      <ApolloProvider client={client}>
        <Routes ref={setNavigator} />
      </ApolloProvider>
    )
  }
}

