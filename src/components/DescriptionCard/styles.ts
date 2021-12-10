import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
    
    background-color: ${({theme}) => theme.colors.primary};

    border-radius: 5px;
`;

export const Header = styled.View`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const Label = styled.Text`
    color: ${({theme}) => theme.colors.label};
`;

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.text};
    padding-right: 5px;
    margin-top: 3px;
`;

export const Description = styled.Text`
    color: ${({theme}) => theme.colors.text_dark};
    padding: 8px 20px;
`;

export const IconButton = styled.TouchableOpacity``;