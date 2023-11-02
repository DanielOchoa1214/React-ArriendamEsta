import { useNavigate } from "react-router-dom";
import Register from "../components/Register/Register";
import { Button, Center } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function RegisterPage() {
    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1);
    }
    return (
        <>
            <Center id="register" flexDirection={"column"} marginBlock={"auto"} gap={5} color={"brand.300"}>
                    <Button onClick={onBack}><ArrowBackIcon/></Button>
                    <Register/>
            </Center>
        </>
    );
}