import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Wrap, WrapItem, Heading, Text, Button, Image, Highlight } from "@chakra-ui/react";
import { getPropertyById } from "../../services/PropertyServices";
import RequestPopUp from "../RequestPopUp/RequestPopUp";

export default function PropertyBody() {
    const { id } = useParams();
    const [property, setProperty] = useState();
    const [requested, setRequested] = useState(false);

    useEffect(() => {
        getPropertyById(id).then((res) => setProperty(res));
    }, [id]);

    if (!property) {
        return "loading...";
    }
    console.log(typeof property.description);

    const onRequest = () => setRequested(!requested);

    return (
        <>
            <Wrap h={"40%"} spacing='60px' p={"1rem"}>
                <WrapItem>
                    <Image objectFit='cover' w={{ base: '100%', sm: '30vw' }} maxW={"300px"} src='https://placehold.co/400x400' alt='Imagen Review' />
                </WrapItem>
                <WrapItem flexDirection={"column"} justifyContent={"center"}>
                    <Text py='2'>
                        <Highlight
                            query={'valor:'}
                            styles={{ px: '2', py: '1', bg: 'gray.100', fontWeight: '600' }}>
                            Valor:
                        </Highlight>
                    </Text>
                    <Text marginLeft={7}>
                        ${property.price} pesos
                    </Text>
                    <Text py='2'>
                        <Highlight
                            query={'Descripción:'}
                            styles={{ px: '2', py: '1', bg: 'gray.100', fontWeight: '600' }}>
                            Descripción:
                        </Highlight>
                    </Text>
                    <Text marginLeft={7}>
                        {property.description}
                    </Text>
                    <Text py='2'>
                        <Highlight
                            query={'Metros cuadrados:'}
                            styles={{ px: '2', py: '1', bg: 'gray.100', fontWeight: '600' }}>
                            Metros cuadrados:
                        </Highlight>
                    </Text>
                    <Text marginLeft={7}>
                        {property.squareMeters}
                    </Text>
                    <Text py='2'>
                        <Highlight
                            query={'Ubicación:'}
                            styles={{ px: '2', py: '1', bg: 'gray.100', fontWeight: '600' }}>
                            Ubicación:
                        </Highlight>
                    </Text>
                    <Text marginLeft={7}>
                        {property.location}
                    </Text>
                    <Button
                        marginTop={5}
                        onClick={onRequest}
                        bg={"brand.300"}
                        color={"white"}
                        _hover={{ bg: "brand.600" }}>Hacer Petición</Button>
                    {requested && (
                        <RequestPopUp property={property} isOpen={true} />
                    )
                    }
                </WrapItem>
            </Wrap>
        </>
    )
}