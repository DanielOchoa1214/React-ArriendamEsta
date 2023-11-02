import { Button } from "@chakra-ui/react";
import Login from "../components/Login/Login";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";


export default function LoginPage(){

    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1);
    }

    return (
        <>
            <Button onClick={onBack}><ArrowBackIcon/></Button>
            <Login/>
        </>
    );
}