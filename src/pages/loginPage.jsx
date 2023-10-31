import { AbsoluteCenter, Button, ButtonGroup, Center, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    let onLogin = () => {
        navigate("/search");
    }

    return (
        <>
            <AbsoluteCenter border={"2px solid black"} borderColor={"brand.400"} borderRadius={50} p={10}>
                <Center flexDirection={"column"} marginBlock={"auto"} gap={5} color={"brand.100"}>
                    <Heading fontSize={150}>ArriendamEsta</Heading>
                    <Text fontSize={40}>Como esta ninguna</Text>
                    <Button onClick={onLogin} bg={"brand.300"} color={"white"} _hover={{bg: "brand.600"}}>Login</Button>
                    <Button bg={"brand.300"} color={"white"} _hover={{bg: "brand.600"}}>Crear cuenta?</Button>
                </Center>
            </AbsoluteCenter>
        </>
    );
}