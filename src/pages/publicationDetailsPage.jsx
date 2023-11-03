import Navigation from "../components/Navigation/Navigation";
import { Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import PropertyBody from "../components/PropertyBody/PropertyBody";
import PropertyHeader from "../components/PropertyHeader/PropertyHeader";
import ReviewsList from "../components/ReviewsList/ReviewsList";

export default function PublicationDetailsPage() {
    const { id } = useParams();

    return (
        <>
            <Navigation />
            <Container maxW='90vw'>
            <PropertyHeader />
             <PropertyBody />
             <ReviewsList target="property" id={id}></ReviewsList>
            </Container>

        </>
    );
}