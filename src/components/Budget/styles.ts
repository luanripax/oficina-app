import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.secondary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    padding: 10px 15px;
    margin-bottom: 10px;
`;

export const Info = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Customer = styled.Text`
    color: ${({theme}) => theme.colors.text};
`;

export const Seller = styled.Text`
    color: ${({theme}) => theme.colors.text};
`;

export const Value = styled.Text`
    color: ${({theme}) => theme.colors.primary_light};
`;

export const Label = styled.Text`
    color: ${({theme}) => theme.colors.label};
`;

export const LabelInfo = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;
