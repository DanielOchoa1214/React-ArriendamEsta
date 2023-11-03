import { StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Review(props) {

    const { review } = props;
    const navigate = useNavigate();

    const handleReviewClick = () => {
        navigate(`/profile/${review.authorId}`);
    };

    return (
        <>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='scroll' variant='outline' h={"20vw"} maxH={"200px"} mt={"1rem"}>
                <Image objectFit='cover' w={{ base: '100%', sm: '30vw' }} maxW={"300px"} src='https://placehold.co/400x4000' alt='Imagen Review'/>
                <Stack>
                    <CardBody>
                        <Heading size='md' onClick={handleReviewClick} cursor={"pointer"}>{review.name}</Heading>
                        <Text display={'flex'} alignItems={'center'} color={'brand.300'} py='2'>{review.stars}<StarIcon marginStart={2} color={'brand.300'}/></Text>
                        <Text py='2'>{review.content}</Text>
                    </CardBody>
                </Stack>
            </Card>
        </>
    );
}