import Navigation from "../components/Navigation/Navigation";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
export default function SearchPage() {
    return (
        <>
        <Navigation></Navigation>
        <Container maxW='90vw'>
            <Grid
                templateAreas={`"header header"
                                "nav main "`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'300px 1fr'}
                gap='3'
                color='blackAlpha.700'
                >
                <GridItem pl='2' area={'header'}>
                    <Heading>Apartamentos</Heading>
                </GridItem>
                <GridItem pl='2' area={'nav'}>
                    <SearchBar></SearchBar>
                </GridItem>
                <GridItem pl='2' area={'main'}>
                    Listar Apartamentos
                </GridItem>
            </Grid>
        </Container>
        </>
    );
}