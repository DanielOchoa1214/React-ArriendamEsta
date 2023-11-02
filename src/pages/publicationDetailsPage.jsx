import Navigation from "../components/Navigation/Navigation";
import { Container, Wrap, Heading, Text, WrapItem } from "@chakra-ui/react";
import { getPropertyById } from "../services/PropertyServices";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PublicationDetailsPage() {
    const { id } = useParams();
    const [property, setProperty] = useState();

    useEffect(() => {
            getPropertyById(id).then((res) => setProperty(res));
        }, [id]);

    if(!property){
        return "loading...";
    }


    return (
        <>
            <Navigation/>
            <Container maxW='90vw'>
            <Wrap h={"50%"} spacing='60px'p={"1rem"}>
                <WrapItem flexDirection={"column"} justifyContent={"center"}>
                    <Heading>{property.title}</Heading>
                    <Text py='2'>Valor: ${property.price} pesos</Text>
                    <Text py='2'>{property.description}</Text>
                    <Text py='2'>Metros cuadrados: {property.squareMeters}</Text>
                    <Text py='2'>Ubicacion: {property.location}</Text>
                </WrapItem>
            </Wrap>
            </Container>
        </>
    );
}