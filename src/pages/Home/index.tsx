import { Modal} from "react-native";
import { Container, Budgets, DescriptionCardInfo } from "./styles";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Bugdet } from "../../components/Budget";
import { DescriptionCard } from "../../components/DescriptionCard";
import axios from "axios";

export function Home() {

    const [budgets, setBudgets] = useState([]);
    const [description, setDescription] = useState('');
    const [descriptionModal, setDescriptionModal] = useState(false);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/codificar/oficina/proposals')
            .then(res => setBudgets(res.data))
            .catch(err => console.log(err));
    }, []);

    function handleClickBudget(id) {
        setDescriptionModal(true);

        const clickedBudget = budgets.find(item => item.id === id);
        setDescription(clickedBudget.description);
    }

    return(
        <Container>

            <Header />

            <Budgets
                showsVerticalScrollIndicator={false}
            >

                {budgets.map(item => 
                    <Bugdet 
                        key={item.id}
                        customer={item.customer}
                        seller={item.seller}
                        value={item.value}
                        onPress={() => handleClickBudget(item.id)}
                    />)
                }

            </Budgets>

            <Modal 
                visible={descriptionModal}
                transparent={true}
            >
                <DescriptionCardInfo>
                    <DescriptionCard
                        description={description}
                        onPress={() => setDescriptionModal(false)}
                    />
                </DescriptionCardInfo>
                
            </Modal>

        </Container>
    )
}