import { Card, Image, Stack, CardBody, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Property(props) {
    const { property } = props;
    const navigate = useNavigate();

    let onDetails = () => {
        navigate(`/publication/${property.id}`);
    }

    return (
        <Card direction={{ base: 'column', sm: 'row' }} overflow='scroll' variant='outline' minH={"-webkit-max-content"} h={"20vw"} maxH={"200px"} mt={"1rem"}>
            <Image objectFit='cover' objectPosition={'center'} w={{ base: '100%', sm: '30vw' }} maxW={"300px"} src='https://placehold.co/600x400' alt='Primera imagen de la propiedad'/>
            <Stack>
                    <CardBody>
                        <Heading size='md'>{property.title}</Heading>
                        <Text py='2'>Precio: ${property.price} pesos</Text>
                        <Text py='2'>Ubicación: {property.location}</Text>
                        <Text py='2'>Metros Cuadrados: {property.squareMeters}</Text>
                        <Button onClick={onDetails} bg={"brand.300"} color={"white"} _hover={{bg: "brand.600"}}>Mas Detalles</Button>
                    </CardBody>
                </Stack>
        </Card>
    );
}