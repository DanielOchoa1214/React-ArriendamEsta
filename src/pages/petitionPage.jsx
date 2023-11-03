import Navigation from "../components/Navigation/Navigation";
import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import PetitionList from "../components/PetitionList/PetitionList";
import PetitionListMade from "../components/PetitionList/PetitionListMade";

export default function PetitionPage() {
    return (
        <>
            <Navigation />
            <Container maxW='90vw'>
                <Heading>Peticiones Recibidas</Heading>
                <PetitionList />
                <Heading>Peticiones Hechas</Heading>
                <PetitionListMade />
            </Container>
        </>
    );
}