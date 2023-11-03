import { Card, Image, Stack, CardBody, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function PetitionMade(props) {
    const { petitionMade } = props;
    const navigate = useNavigate();

    return (
        <Card direction={{ base: 'column', sm: 'row' }} overflow='scroll' variant='outline' minH={"-webkit-max-content"} h={"20vw"} maxH={"200px"} mt={"1rem"}>
            <Stack>
                <CardBody>
                    <Heading size='md'>{petitionMade.id}</Heading>
                    <Text py='2'>{petitionMade.ownerId}</Text>
                    <Text py='2'>{petitionMade.propertyId}</Text>
                    <Text py='2'>{petitionMade.content}</Text>
                </CardBody>
            </Stack>
        </Card>
    );
}