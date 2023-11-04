import { Card, Image, Stack, CardBody, Heading, Text, Button, Highlight, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { updatePetitionStatus } from "../../services/PetitionServices";
import { useEffect, useState } from "react";
import { getPropertyById } from "../../services/PropertyServices";
import { getUser } from "../../services/UserServices";

export default function Petition(props) {
    const { petition } = props;
    const [property, setProperty] = useState({});
    const [author, setAuthor] = useState({});

    let onAccept = () => {
        updatePetitionStatus(petition.id, "true");
    }
    let onDenied = () => {
        updatePetitionStatus(petition.id, "false");
    }

    useEffect(() => {
        getPropertyById(petition.propertyId).then((res) => setProperty(res));
        getUser(petition.authorId).then((res) => setAuthor(res));
    }, [])

    return (
        <Card direction={{ base: 'column', sm: 'row' }} overflow='scroll' variant='outline' minH={"-webkit-max-content"} mt={"1rem"}>
            <Stack>
                <CardBody >
                    <Heading py='2' size='lg'>Sobre: {property.title}</Heading>
                    <Text fontSize='xs' fontWeight={600}>ID: {petition.id}</Text>
                    <Text mt={3}>
                        <Highlight
                            query='Mensaje:'
                            styles={{ px: '2', py: '1', rounded: 'none', bg: 'gray.200', mr: '1rem' }}>
                            Mensaje:
                        </Highlight>
                        {petition.content}
                    </Text>
                    <Text mt={3}>
                        <Highlight
                            query='Hecha por:'
                            styles={{ px: '2', py: '1', rounded: 'none', bg: 'gray.200', mr: '1rem' }}>
                            Hecha por:
                        </Highlight>
                        {author.name}
                    </Text>
                    <HStack mt={5}>
                        <Button onClick={onAccept} bg={"brand.300"} color={"white"} _hover={{ bg: "brand.600" }}>Aceptar</Button>
                        <Button onClick={onDenied} color={"brand.300"} _hover={{ bg: "gray.300" }} variant={'outline'}>Rechazar</Button>
                    </HStack>
                </CardBody>
            </Stack>
        </Card>
    );
}