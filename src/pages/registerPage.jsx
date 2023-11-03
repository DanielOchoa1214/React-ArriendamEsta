import { useNavigate } from "react-router-dom";
import Register from "../components/Register/Register";
import { Box, Button, Center } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function RegisterPage() {
    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1);
    }
    return (
        <Box >
            <Center id="register" flexDirection={"column"} marginBlock={"auto"} gap={5} color={"brand.300"}>
                    <Button 
                    marginTop={2}
                    border={'2px solid'}
                    alignSelf={'flex-start'}
                    variant='ghost'
                    _hover={{ color: '#fff', background: 'brand.500' }}
                    onClick={onBack} ><ArrowBackIcon marginRight={2}/> Volver</Button>
                    <Register/>
            </Center>
        </Box>
    );
}