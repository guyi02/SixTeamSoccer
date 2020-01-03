import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-evenly;
  background-color: ${colors.white};
`;

export const AreaSelected = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 1px solid blue;
  margin: 0 10px;
`;

export const TextBtnConfirm = styled.Text`
  font-size: 20px;
  color: ${colors.primary};
  font-weight: bold;
`;
