import React from "react";
import { 
    Container,
    Label, 
    Icon, 
    Header, 
    IconButton,
    Description
 } from "./styles";

interface DescriptionCardProps {
    description: string;
    onPress: () => void;
}

export function DescriptionCard({description, onPress} : DescriptionCardProps) {
    return(
        <Container>
            <Header>
                <IconButton onPress={onPress}>
                    <Icon name="x-circle"/>
                </IconButton>
            </Header>
            <Description>{description}</Description>
        </Container>
    )
}