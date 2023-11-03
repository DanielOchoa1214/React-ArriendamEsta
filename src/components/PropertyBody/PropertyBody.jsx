import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Wrap, WrapItem, Heading, Text, Button, Image } from "@chakra-ui/react";
import { getPropertyById } from "../../services/PropertyServices";
import RequestPopUp from "../RequestPopUp/RequestPopUp";

export default function PropertyBody(){
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
            <Wrap h={"40%"} spacing='60px' p={"1rem"}>
            <WrapItem>
                <Image objectFit='cover' w={{ base: '100%', sm: '30vw' }} maxW={"300px"} src='https://placehold.co/400x400' alt='Imagen Review'/>
            </WrapItem>
                <WrapItem flexDirection={"column"} justifyContent={"center"}>
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
            </>
        )
}