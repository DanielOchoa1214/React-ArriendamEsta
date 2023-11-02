import { Card, Image, Stack, CardBody, Heading, Text, Button } from "@chakra-ui/react";

export default function Petition(props) {
    const { petition } = props;

    return (
        <Card direction={{ base: 'column', sm: 'row' }} overflow='scroll' variant='outline' minH={"-webkit-max-content"} h={"20vw"} maxH={"200px"} mt={"1rem"}>
            <Stack>
                    <CardBody>
                        <Heading size='md'>{petition.id}</Heading>
                        <Text py='2'>{petition.content}</Text>
                        <Text py='2'>{petition.authorId}</Text>
                    </CardBody>
            </Stack>
        </Card>
    );
}