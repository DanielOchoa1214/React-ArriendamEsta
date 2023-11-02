import { AbsoluteCenter, Box, Button, ButtonGroup, Center, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import Register from "../../components/Register/Register";
import { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Login from "../../components/Login/Login";

export default function LoginPage() {
    const navigate = useNavigate();
    let [registering, setRegistering] = useState(false);

    let onLogin = () => {
        navigate("/search");
    }

    let onToogleRegister = () => {
        setRegistering(!registering);
    }

    return (
        <Box id="bg-login">
            <AbsoluteCenter p={10} backgroundColor={'rgba(255, 255, 255, 0.3)'} backdropFilter={'blur(5px)'}>
                <Login/>
                {!registering ? 
                <Center id="login" flexDirection={"column"} marginBlock={"auto"} gap={5} color={"brand.100"}>
                    <Heading color={'brand.300'} fontSize={100}>ArriendamEsta</Heading>
                    <Text fontSize={40} color={'white'} fontWeight={700}>Como esta ninguna</Text>
                    <Button onClick={onLogin} bg={"brand.300"} color={"white"} _hover={{bg: "brand.600"}}>Login</Button>
                    <Button onClick={onToogleRegister} bg={"brand.300"} color={"white"} _hover={{bg: "brand.600"}}>Crear cuenta</Button>
                </Center> : ""}
                {registering ? 
                <Center id="register" flexDirection={"column"} marginBlock={"auto"} gap={5} color={"brand.300"}>
                    <Button onClick={onToogleRegister}><ArrowBackIcon/></Button>
                    <Register/>
                </Center> : ""}
            </AbsoluteCenter>
        </Box>
    );
}