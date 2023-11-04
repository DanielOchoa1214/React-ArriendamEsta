import Navigation from "../components/Navigation/Navigation";
import { Container, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import PetitionList from "../components/PetitionList/PetitionList";
import PetitionListMade from "../components/PetitionList/PetitionListMade";

export default function PetitionPage() {
    return (
        <>
            <Navigation />
            <Container maxW='90vw' pt={10}>
                <Heading>Peticiones a mis propiedades</Heading>
                <PetitionList />
                <Divider borderColor={"brand.300"} h={'2px'} opacity={'1'} marginBlock={8} />
                <Heading>Mis solicitudes</Heading>
                <PetitionListMade />
            </Container>
        </>
    );
}