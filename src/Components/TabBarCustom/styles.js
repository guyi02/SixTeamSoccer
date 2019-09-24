import styled from "styled-components/native";
import { colors, metrics, fonts } from "~/styles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${metrics.basePadding}px;
  width: 100%;
  height: auto;
  margin: 0px ${metrics.baseMargin}px;
`;

export const CenterTab = styled.TouchableOpacity`
  background-color: ${colors.primary};
`;
