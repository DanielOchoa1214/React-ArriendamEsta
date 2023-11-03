import Navigation from "../components/Navigation/Navigation";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import { getProperties } from "../services/PropertyServices";
import { useEffect, useState } from "react";
import PropertyList from "../components/PropertyList/PropertyList";

export default function SearchPage() {

    const [filters, setFilters] = useState([]);

    function handleSearch(filters) {
        setFilters(filters);
    }

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
                    <SearchBar onSearch={handleSearch}></SearchBar>
                </GridItem>
                <GridItem pl='2' area={'main'}>
                    <PropertyList filters={filters}></PropertyList>
                </GridItem>
            </Grid>
        </Container>
        </>
    );
}