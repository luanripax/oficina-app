import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%;

    height: ${RFValue(130)}px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

    padding-top: ${40 + getBottomSpace()}px;
    padding-left: 15px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(28)}px;
`;

export const Description = styled.Text`
    color: ${({theme}) => theme.colors.text_dark};;
    margin-top: 10px;
    margin-left: 3px;
`;