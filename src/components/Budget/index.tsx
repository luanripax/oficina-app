import React from "react";
import { 
    Container,
    Customer,
    Seller,
    Value,
    Label,
    Info,
    LabelInfo
   
 } from "./styles";

 interface BugdetProps{
    customer: string;
    seller: string;
    value: string;
    onPress: () => void;
 }

 export function Bugdet({
    customer,
    seller,
    value,
    onPress
}: BugdetProps) {
    return(
        <Container onPress={onPress}>

            <LabelInfo>
                <Label>Cliente</Label>
                <Label>Vendedor</Label>
                <Label>Valor</Label>
            </LabelInfo>

            <Info> 
                <Customer>{customer}</Customer>
                <Seller>{seller}</Seller>
                <Value>{value}</Value>
            </Info>
            
        </Container>
    )
}