import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Wrap, WrapItem, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { getPropertyById } from "../../services/PropertyServices";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function PropertyHeader(props){
    const { id } = useParams();
    const [property, setProperty] = useState();
    const [requested, setRequested] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getPropertyById(id).then((res) => setProperty(res));
    }, [id]);

    if (!property) {
        return "loading...";
    }

    let onBack = () => {
        navigate(-1);
    }

    return (
        <>
            <Stack h={"10%"} spacing='30px'p={"1rem"} justifyContent="space-between">
                <WrapItem>
                    <Button 
                    onClick={onBack} 
                    bg={"brand.300"} 
                    color={"white"} 
                    _hover={{ bg: "brand.600" }}><ArrowBackIcon marginRight={3}/>Atras</Button>
                </WrapItem>
                <WrapItem flexDirection="column" align="flex-start">
                    <Heading size={'md'}>Propiedad en arriendo</Heading>
                    <Text as='b' fontSize='6xl'>{property.title}</Text>
                </WrapItem>
            </Stack>
        </>
    )

}