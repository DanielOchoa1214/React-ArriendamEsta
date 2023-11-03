import Navigation from "../components/Navigation/Navigation";
import { Container, Wrap, Heading, Text, WrapItem, Button } from "@chakra-ui/react";
import { getPropertyById } from "../services/PropertyServices";
import { createPetitionForUser } from "../services/PetitionServices";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RequestPopUp from "../components/RequestPopUp/RequestPopUp";
import { getReviewsFromProperty } from "../services/ReviewServices";
import ReviewsList from "../components/ReviewsList/ReviewsList";

export default function PublicationDetailsPage() {
    const { id } = useParams();
    const [property, setProperty] = useState();
    const [requested, setRequested] = useState(false);

    useEffect(() => {
        getPropertyById(id).then((res) => setProperty(res));
    }, [id]);

    if (!property) {
        return "loading...";
    }

    const onRequest = () => setRequested(!requested);

    return (
        <>
            <Navigation />
            <Container maxW='90vw'>
                <Wrap h={"50%"} spacing='60px' p={"1rem"}>
                    <WrapItem flexDirection={"column"} justifyContent={"center"}>
                        <Heading>{property.title}</Heading>
                        <Text py='2'>Valor: ${property.price} pesos</Text>
                        <Text py='2'>{property.description}</Text>
                        <Text py='2'>Metros cuadrados: {property.squareMeters}</Text>
                        <Text py='2'>Ubicación: {property.location}</Text>
                        <Button onClick={onRequest} bg={"brand.300"} color={"white"} _hover={{ bg: "brand.600" }}>Hacer Petición</Button>
                         { requested && (
                            <RequestPopUp property={property} isOpen={true} />
                            )
                         }
                    </WrapItem>
                </Wrap>
            </Container>
            <ReviewsList target="property" id={id}></ReviewsList>
        </>
    );
}