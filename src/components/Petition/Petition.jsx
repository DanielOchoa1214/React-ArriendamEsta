import { Card, Image, Stack, CardBody, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { updatePetitionStatus } from "../../services/PetitionServices";

export default function Petition(props) {
    const { petition } = props;
    const navigate = useNavigate();

    let onAccept = () => {
        updatePetitionStatus(petition.id, "true");
    }
    let onDenied = () => {
        updatePetitionStatus(petition.id, "false");
    }

    return (
        <Card direction={{ base: 'column', sm: 'row' }} overflow='scroll' variant='outline' minH={"-webkit-max-content"} h={"20vw"} maxH={"200px"} mt={"1rem"}>
            <Stack>
                <CardBody>
                    <Heading size='md'>{petition.id}</Heading>
                    <Text py='2'>{petition.content}</Text>
                    <Text py='2'>{petition.authorId}</Text>
                    <Button onClick={onAccept} bg={"brand.300"} color={"white"} _hover={{ bg: "brand.600" }}>aceptar</Button>
                    <Button onClick={onDenied} bg={"brand.300"} color={"white"} _hover={{ bg: "brand.600" }}>rechazar</Button>
                </CardBody>
            </Stack>
        </Card>
    );
}