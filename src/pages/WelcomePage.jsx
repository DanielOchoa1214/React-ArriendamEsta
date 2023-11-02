import { Button, Center, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {

    const navigate = useNavigate();

    let onLogin = () => {
        navigate("login");
    }

    let onCreateAccount = () => {
        navigate("register");
    }

    return (
        <>
            <Center id="login" flexDirection={"column"} marginBlock={"auto"} gap={5} color={"brand.100"}>
                <Heading color={'brand.300'} fontSize={100}>ArriendamEsta</Heading>
                <Text fontSize={40} color={'white'} fontWeight={700}>Como esta ninguna</Text>
                <Button onClick={onLogin} bg={"brand.300"} color={"white"} _hover={{ bg: "brand.600" }}>Login</Button>
                <Button onClick={onCreateAccount} bg={"brand.300"} color={"white"} _hover={{ bg: "brand.600" }}>Crear cuenta</Button>
            </Center>
        </>
    );
}