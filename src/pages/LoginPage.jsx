import { Button } from "@chakra-ui/react";
import Login from "../components/Login/Login";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {

    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1);
    }

    return (
        <>
            <Login />
            <Button
                color={'white'}
                w={'100%'}
                marginTop={2}
                variant='outline'
                _hover={{ color: '#fff', background: 'brand.500' }}
                onClick={onBack}><ArrowBackIcon marginRight={2}/> Volver</Button>
        </>
    );
}