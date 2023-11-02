import Navigation from "../components/Navigation/Navigation";
import { Container, Wrap, Heading, Text, WrapItem, Button, Popover, PopoverTrigger, PopoverBody, Box, Portal, PopoverContent } from "@chakra-ui/react";
import { getPropertyById } from "../services/PropertyServices";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PublicationDetailsPage() {
    const { id } = useParams();
    const [property, setProperty] = useState();
    const [requested, setRequested] = useState(false);

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
                    <Button onClick={() => setRequested(true)} bg={"brand.300"} color={"white"} _hover={{bg: "brand.600"}}>Hacer Peticion</Button>
                    <Popover>
                    <PopoverTrigger>
                        <Button>Hacer Peticion</Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                        <PopoverBody>
                            <Box>
                            Hello. Nice to meet you! This is the body of the popover
                            </Box>
                            {requested && (<Button
                            mt={4}
                            colorScheme='blue'
                            onClick={setRequested(false)}
                            >
                            Close
                            </Button>)}
                        </PopoverBody>
                        </PopoverContent>
                    </Portal>
                    </Popover>
                </WrapItem>
            </Wrap>
            </Container>
        </>
    );
}