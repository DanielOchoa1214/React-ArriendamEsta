import { StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function Review(props) {

    const { review } = props;

    return (
        <>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='scroll' variant='outline' h={"20vw"} maxH={"200px"} mt={"1rem"}>
                <Image objectFit='cover' w={{ base: '100%', sm: '30vw' }} maxW={"300px"} src='https://placehold.co/400x4000' alt='Imagen Review'/>
                <Stack>
                    <CardBody>
                        <Heading size='md'>{review.name}</Heading>
                        <Text display={'flex'} alignItems={'center'} color={'brand.300'} py='2'>{review.stars}<StarIcon marginStart={2} color={'brand.300'}/></Text>
                        <Text py='2'>{review.content}</Text>
                    </CardBody>
                </Stack>
            </Card>
        </>
    );
}