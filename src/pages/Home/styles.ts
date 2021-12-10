import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    flex: 1;
`;

export const Budgets = styled.ScrollView`
    margin: 10px 10px;
`;

export const DescriptionCardInfo = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;