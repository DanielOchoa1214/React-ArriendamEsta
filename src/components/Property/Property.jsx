import { Card, Image, Stack, CardBody, Heading, Text } from "@chakra-ui/react";

export default function Property(props) {
    const { property } = props;

    return (
        <Card direction={{ base: 'column', sm: 'row' }} overflow='scroll' variant='outline' minH={"-webkit-max-content"} h={"20vw"} maxH={"200px"} mt={"1rem"}>
            <Image objectFit='cover' objectPosition={'center'} w={{ base: '100%', sm: '30vw' }} maxW={"300px"} src='https://placehold.co/600x400' alt='Primera imagen de la propiedad'/>
            <Stack>
                    <CardBody>
                        <Heading size='md'>{property.title}</Heading>
                        <Text py='2'>${property.price} pesos</Text>
                        <Text py='2'>{property.location}</Text>
                    </CardBody>
                </Stack>
        </Card>
    );
}