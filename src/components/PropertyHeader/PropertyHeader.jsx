import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Wrap, WrapItem, Heading, Text, Button } from "@chakra-ui/react";
import { getPropertyById } from "../../services/PropertyServices";

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
        navigate(`/profile`);
    }

    return (
        <>
            <Wrap h={"10%"} spacing='30px'p={"1rem"} justifyContent="space-between">
                <WrapItem>
                    <Button onClick={onBack} bg={"brand.300"} color={"white"} _hover={{ bg: "brand.600" }}>Atras</Button>
                </WrapItem>
                <WrapItem flexDirection="column" align="flex-start">
                    <Heading>Propiedad en arriendo</Heading>
                    <Text as='b' fontSize='4xl' py='4'>{property.title}</Text>
                </WrapItem>

            </Wrap>
        </>
    )

}