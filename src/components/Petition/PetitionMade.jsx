import { Card, Image, Stack, CardBody, Heading, Text, Button, Highlight } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getPropertyById } from "../../services/PropertyServices";
import { getUser } from "../../services/UserServices";

export default function PetitionMade(props) {
    const { petitionMade } = props;
    const [property, setProperty] = useState({});
    const [owner, setOwner] = useState({});

    useEffect(() => {
        getPropertyById(petitionMade.propertyId).then((res) => setProperty(res));
        getUser(petitionMade.ownerId).then((res) => setOwner(res));
    }, [])

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='scroll'
            variant='outline'
            minH={"-webkit-max-content"}
            marginBlock={"1rem 3rem"}
            borderLeft={'6px solid'}
            borderLeftColor={'brand.100'}
        >
            <CardBody >
                <Heading py='2' size={'sm'}>
                    <Highlight
                        query='Propiedad solicitada:'
                        styles={{ px: '2', py: '1', bg: 'gray.200', mr: '1rem' }}
                    >
                        Propiedad solicitada:
                    </Highlight>
                </Heading>
                <Heading>{property.title}</Heading>
                <Text fontSize='xs' fontWeight={600} mb={3}>ID: {petitionMade.id}</Text>
                <Text py='2'>
                    <Highlight
                    query='Propietario:'
                    styles={{  py: '1' , textDecoration: 'underline', fontWeight: 600, }}
                    >
                        Propietario:
                    </Highlight>
                </Text>
                <Text >{owner.name}</Text>
                <Text py='2'>
                    <Highlight
                    query='Mensaje:'
                    styles={{  py: '1' , textDecoration: 'underline', fontWeight: 600, }}
                    >
                        Mensaje: 
                    </Highlight>
                </Text>
                <Text >{petitionMade.content}</Text>
            </CardBody>
        </Card>
    );
}