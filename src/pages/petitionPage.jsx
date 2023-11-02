import Navigation from "../components/Navigation/Navigation";
import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import PetitionList from "../components/PetitionList/PetitionList";

export default function PetitionPage() {
    return (
        <>
            <Navigation />
            <Container maxW='90vw'>
                <Heading>Peticiones</Heading>
                <PetitionList />
            </Container>
        </>
    );
}